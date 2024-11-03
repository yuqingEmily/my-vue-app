<template>
    <div class="select-campus">
      <h1>Select Campus</h1>
      <div class="button-container">
        <button class="campus-button" @click="selectCampus('Melbourne')">Melbourne</button>
        <button class="campus-button" @click="selectCampus('Geelong')">Geelong</button>
        <button class="campus-button" @click="selectCampus('Sydney')">Sydney</button>
        <button class="campus-button" @click="selectCampus('Adelaide')">Adelaide</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SelectCampus',
    methods: {
      selectCampus(campus) {
        alert(`You selected ${campus}`);
      }
    }
  }
  </script>
  
  <style scoped>
  .select-campus {
    text-align: center;
    margin-top: 50px;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
  
  .campus-button {
    padding: 10px 1px;
    font-size: 14px;
    width: 100px;
    color: white;
    background-color: #ff6347;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .campus-button:hover {
    background-color: #e5533f;
  }
  </style>
  