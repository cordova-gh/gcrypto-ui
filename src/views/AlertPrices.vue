<template>
  <div>
    <div class="about">
      <h1>This is an Alert Prices page</h1>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Enable</th>
            <th>Is support</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) of list" :key="index">
            <td>{{ row.id_parametro_pair_cv}}</td>
            <td>{{ row.price}}</td>
            <td>{{ row.flag_enable}}</td>
            <td>{{ row.is_support}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <form @submit.prevent="saveEntity">
      <div class="form-group">
        <label for="exampleInputEmail1">Price</label>
        <input type="text" class="form-control" v-model="alertPrice.price" />
      </div>
      <div class="form-group form-check">
        <label class="form-check-label" for="exampleCheck1">Enable</label>
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          v-model="alertPrice.flag_enable"
        />
      </div>
      <div class="form-group form-check">
        <label class="form-check-label" for="exampleCheck1">Support</label>
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          v-model="alertPrice.is_support"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      list: [],
      alertPrice: {},
    };
  },
  created() {
    axios
      .get('https://gcrypto.herokuapp.com/alert-prices')
      .then((response) => {
        this.list = response.data;
      });
  },
  methods: {
    saveEntity() {
      return axios
        .post('https://gcrypto.herokuapp.com/alert-prices', this.alertPrice, {
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
        })
        .then(response => response.data)
        .catch(error => `An error occured.. ${error}!`);
    },
  },
};
</script>
