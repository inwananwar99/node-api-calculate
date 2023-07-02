<template>
    <div class="basic">
      <h1>Calculator Basic</h1>
      <form action="" class="form">
          <div class="form-group">
            <label for="">Nilai 1</label>
            <input type="text" id="nilai1" class="form-control">
          </div>
          <div class="form-group">
            <select id="operasi" class="form-control mt-3">
                <option value="sum">Sum</option>
                <option value="substract">Substractian</option>
                <option value="multiplic">Multiplication</option>
                <option value="division">Division</option>
            </select>
          </div>
          <div class="form-group mt-3">
            <label for="">Nilai 2</label>
            <input type="text" id="nilai2" class="form-control">
          </div>
          <button id="submit" v-on:click="warn()" class="btn btn-info mt-3">Hitung</button>
      </form>
    </div>
  </template>
  <script>

  export default{
    methods: {
    warn: function () {
        alert('Berhasil klik tombol hitung')
    }
    }
  }
//   let nilai1 = document.getElementById('nilai1')
//   console.log(nilai1)
//   const count = ()=>{
//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title: "Vue POST Request Example" })
//       };
//       fetch("https://localhost", requestOptions)
//         .then(response => response.json())
//         // .then(data => (this.postId = data.id));
//   }
</script>
  


  