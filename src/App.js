import React, { useState } from 'react';
import './TrainBookingApp.css';
import TrainScheduleTable from './TrainScheduleTable'; // Import TrainScheduleTable ที่เราสร้างขึ้น

const TrainBookingApp = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState(0);
  const [departureDate, setDepartureDate] = useState('');
  const [ticketType, setTicketType] = useState('ordinary');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
    setPrice(calculatePrice(event.target.value, destination));
    setBookingSuccess(false);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
    setPrice(calculatePrice(origin, event.target.value));
    setBookingSuccess(false);
  };

  const calculatePrice = (origin, destination, ticketType) => {
    let price = 0;
    if (origin === 'กรุงเทพ' && destination === 'เชียงใหม่') {
      price = ticketType === 'ordinary' ? 1000 : 1500;
    } else if (origin === 'เชียงใหม่' && destination === 'กรุงเทพ') {
      price = ticketType === 'ordinary' ? 1200 : 1700;
    } else if (origin === 'กรุงเทพ' && destination === 'ภูเก็ต') {
      price = ticketType === 'ordinary' ? 1500 : 2000;
    } else if (origin === 'ภูเก็ต' && destination === 'กรุงเทพ') {
      price = ticketType === 'ordinary' ? 1700 : 2200;
    } else if (origin === 'กรุงเทพ' && destination === 'หาดใหญ่') {
      price = ticketType === 'ordinary' ? 1800 : 2300;
    } else if (origin === 'หาดใหญ่' && destination === 'กรุงเทพ') {
      price = ticketType === 'ordinary' ? 2000 : 2500;
    } else if (origin === 'เชียงใหม่' && destination === 'หาดใหญ่') {
      price = ticketType === 'ordinary' ? 2100 : 2600;
    } else if (origin === 'หาดใหญ่' && destination === 'เชียงใหม่') {
      price = ticketType === 'ordinary' ? 2300 : 2700;
    }
    return price;
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('การจอง: ', { origin, destination, price, departureDate, ticketType });
    setBookingSuccess(true);
  };

  return (
    <div className="train-booking-container">
      <h1>การจองรถไฟ</h1>
      <form onSubmit={handleSubmit}>
        <label>
          สถานที่เริ่มต้น:
          <select className="input-field" value={origin} onChange={handleOriginChange}>
            <option value="">เลือกสถานที่เริ่มต้น</option>
            <option value="กรุงเทพ">กรุงเทพ</option>
            <option value="เชียงใหม่">เชียงใหม่</option>
            <option value="ภูเก็ต">ภูเก็ต</option>
            <option value="หาดใหญ่">หาดใหญ่</option>
          </select>
        </label>
        <br />
        <label>
          สถานที่ปลายทาง:
          <select className="input-field" value={destination} onChange={handleDestinationChange}>
            <option value="">เลือกสถานที่ปลายทาง</option>
            <option value="กรุงเทพ">กรุงเทพ</option>
            <option value="เชียงใหม่">เชียงใหม่</option>
            <option value="ภูเก็ต">ภูเก็ต</option>
            <option value="หาดใหญ่">หาดใหญ่</option>
          </select>
        </label>
        <br />
        <label>
          วันที่ออกเดินทาง:
          <input className="input-field" type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </label>
        <br />
        <label>
          ประเภทตั๋ว:
          <select className="input-field" value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
            <option value="ordinary">ปกติ</option>
            <option value="special">พิเศษ</option>
          </select>
        </label>
        <br />
        <button className="submit-button" type="submit">จองตอนนี้</button>
      </form>
      {bookingSuccess && <p className="success-message">การจองถูกสำเร็จ!</p>}
      {price > 0 && <p className="price-tag">ราคารวม: {price}</p>}
      <TrainScheduleTable /> {/* นำ TrainScheduleTable มาใช้งาน */}
    </div>
  );
};

export default TrainBookingApp;
