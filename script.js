const data = [
    {
      checkInDate: '2024-04-01T09:00:05',
      checkOutDate: '2024-04-05T22:00:05',
      guestName: 'Chanakya',
      roomNumber: '101'
    },
    {
      checkInDate: '2024-04-02',
      checkOutDate: '2024-04-07',
      guestName: 'Akhil Goud',
      roomNumber: '102'
    },
    {
      checkInDate: '2024-04-03',
      checkOutDate: '2024-04-06',
      guestName: 'Anil',
      roomNumber: '103'
    },
    {
      checkInDate: '2024-04-04',
      checkOutDate: '2024-04-08',
      guestName: 'Arijeet',
      roomNumber: '104'
    },
    {
      checkInDate: '2024-04-05',
      checkOutDate: '2024-04-09',
      guestName: 'Bhargav',
      roomNumber: '105'
    },
    {
      checkInDate: '2024-04-10',
      checkOutDate: '2024-04-12',
      guestName: 'Ganesh',
      roomNumber: '109'
    },
    {
      checkInDate: '2024-04-11',
      checkOutDate: '2024-04-12',
      guestName: 'Harish Mamidala',
      roomNumber: '117'
    },
    {
      checkInDate: '2024-04-15',
      checkOutDate: '2024-04-16',
      guestName: 'Jayanth',
      roomNumber: '103'
    },
    {
      checkInDate: '2024-04-14',
      checkOutDate: '2024-04-16',
      guestName: 'Jayasree Konduru',
      roomNumber: '114'
    },
    {
      checkInDate: '2024-04-15',
      checkOutDate: '2024-04-18',
      guestName: 'Karunakar Pusuluri',
      roomNumber: '111'
    },
    {
      checkInDate: '2024-04-17',
      checkOutDate: '2024-04-18',
      guestName: 'Mahammad Anif',
      roomNumber: '101'
    },
    {
      checkInDate: '2024-04-20',
      checkOutDate: '2024-04-22',
      guestName: 'Nirmala Mangamuri',
      roomNumber: '102'
    },
    {
      checkInDate: '2024-04-20',
      checkOutDate: '2024-04-21',
      guestName: 'P.V.Rohit',
      roomNumber: '103'
    },
    {
      checkInDate: '2024-04-23',
      checkOutDate: '2024-04-25',
      guestName: 'Raaji',
      roomNumber: '104'
    },
    {
      checkInDate: '2024-04-25',
      checkOutDate: '2024-04-27',
      guestName: 'Raju babu',
      roomNumber: '105'
    },
    {
      checkInDate: '2024-04-24',
      checkOutDate: '2024-04-25',
      guestName: 'Shaiksha',
      roomNumber: '101'
    },
    {
      checkInDate: '2024-04-26',
      checkOutDate: '2024-04-28',
      guestName: 'Syed',
      roomNumber: '102'
    },
    {
      checkInDate: '2024-04-28',
      checkOutDate: '2024-04-30',
      guestName: 'Vinoothna',
      roomNumber: '103'
    },
    {
      checkInDate: '2024-04-30',
      checkOutDate: '2024-05-02',
      guestName: 'Deepak',
      roomNumber: '104'
    },
    {
      checkInDate: '2024-04-28',
      checkOutDate: '2024-04-29',
      guestName: 'Shanmukha Sai',
      roomNumber: '105'
    }
  ];
  
  function filterData() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    let filteredData = data;
    if (startDate && endDate) {
      filteredData = data.filter(item => {
        const checkInDate = new Date(item.checkInDate);
        const checkOutDate = new Date(item.checkOutDate);
        return (
          checkInDate >= new Date(startDate) &&
          checkOutDate <= new Date(endDate)
        );
      });
    }
    displayData(filteredData);
  }
  
  function displayData(data) {
    const dataBody = document.getElementById('dataBody');
    dataBody.innerHTML = '';
    data.forEach(item => {
      const row = document.createElement('tr');
      const checkInDate = new Date(item.checkInDate).toLocaleString();
      const checkOutDate = new Date(item.checkOutDate).toLocaleString();
      row.innerHTML = `
        <td>${checkInDate}</td>
        <td>${checkOutDate}</td>
        <td>${item.guestName}</td>
        <td>${item.roomNumber}</td>
      `;
      dataBody.appendChild(row);
    });
  }

  function GuestSearch() {
    let x = document.getElementById("guestName").value;
    const filteredData = data.filter(item => item.guestName.toLowerCase().includes(x.toLowerCase()));
    displayData(filteredData);
  }

  function RoomSearch() {
    let x = document.getElementById("roomNum").value;
    const filteredData = data.filter(item => item.roomNumber.toString().includes(x.toString()));
    displayData(filteredData);
  }
  
  filterData();