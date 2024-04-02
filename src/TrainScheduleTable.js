import React from 'react';

const TrainScheduleTable = () => {
  return (
    <table className="train-schedule-table">
      <thead>
        <br></br>
        <tr>
          <th>วันที่</th>
          <th>เวลา</th>
          <th>สถานี</th>
          <th>รหัสสถานี</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 มีนาคม 2024</td>
          <td>08:00</td>
          <td>หาดใหญ่</td>
          <td>TONB</td>
        </tr>
        <tr>
          <td>2 มีนาคม 2024</td>
          <td>09:30</td>
          <td>ภูเก็ต</td>
          <td>JARA</td>
        </tr>
        {/* เพิ่มข้อมูลสถานีรถไฟต่อไปตามลำดับ */}
      </tbody>
    </table>
  );
};

export default TrainScheduleTable;
