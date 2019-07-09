import React, { Component } from 'react';
import './App.css';
import StudentCard from './components/studentCard';
import SearchAppBar from './components/navBar';
import AddStudent from './components/addStudent';
import Modal from './components/modal';

const students = [
  {
    name: 'Med Salah',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BqTNaupy8yjdKdQ7_S474SaAfSRnZ3emD03p9GPUw_02yhgC',
    email: 'Sincere@april.biz',
    enrollmentNumber: '38745'
  },
  {
    name: 'Fathi Ali',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQg-vuml56tkQyfKdudnEEVmQmtLjft8uP3Q7hdA0DPWtiSfD',
    email: 'Sincere@april.biz',
    enrollmentNumber: '38743'
  },
  {
    name: 'Sami Dali',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAA_BjuDnrOmdpGUhaJVuY2vp6gn59iQYxdmNBiIeAV5r_uLkt',
    email: 'Sincere@april.biz',
    enrollmentNumber: '38742'
  },
  {
    name: 'Mounira Said',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpwV1TYm9zK5BtABtSUKMOtuVC5DRl9yLzUE2M4Oq4Pamii-k',
    email: 'Sincere@april.biz',
    enrollmentNumber: '38741'
  },
  {
    name: 'Alya Jamel',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tkyOrtoPs7Xpwc05MicxPBb1juMyl5s7sds8t-3gVakM0uj9',
    email: 'Sincere@april.biz',
    enrollmentNumber: '38740'
  }
];

class App extends Component {
  state = {
    visible: false
  };
 
  addOne = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchAppBar
          />
        </header>
        <main>
          <div className="students-display">
            <h2 className="students-title">Students List</h2>
            <div className="students-list">
              {students .map((el, i) => (
                  <StudentCard
                    student={el}
                    key={i}
                  />
                ))}
              <AddStudent addOne={this.addOne} />
              <Modal
                visible={this.state.visible}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
