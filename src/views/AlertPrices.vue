<template>
  <div>
    <div class="container" v-if="!visualizzaForm">
      <div>
        <h1>Alert Prices</h1>
      </div>
      <div class="col-11 text-right">
        <a href="#" @click="prepareInsert">
          <i class="fas fa-plus-circle" />
        </a>
      </div>

      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Enable</th>
            <th>Is support</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) of list" :key="index">
            <td>{{ row.id_parametro_pair_cv}}</td>
            <td>{{ row.price}}</td>
            <td>{{ row.flag_enable}}</td>
            <td>{{ row.is_support}}</td>
            <td>
              <a href="#" @click="editEntity(row.id)">
                <i class="far fa-edit"></i>
              </a>
              <a href="#" @click="deleteEntity(row.id)">
                <i class="far fa-trash-alt" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="container" v-if="visualizzaForm">
      <form @submit.prevent="saveEntity">
        <div class="form-row align-items-center">
          <div class="col-auto">
            <label class="sr-only" for="Price">Price</label>
            <input type="text" class="form-control mb-2" v-model="alertPrice.price" />
          </div>

          <!---->
          <div class="col-auto">
            <div class="form-check mb-2">
              <label class="form-check-label" for="Enable">Enable</label>
              <input class="form-check-input" type="checkbox" v-model="alertPrice.flag_enable" />
            </div>
          </div>

          <div class="col-auto">
            <div class="form-check mb-2">
              <label class="form-check-label" for="Support">Support</label>
              <input class="form-check-input" type="checkbox" v-model="alertPrice.is_support" />
            </div>
          </div>
          <div class="form-group row justify-content-md-center">
            <div class="col-2">
              <input type="button" class="btn btn-block btn-dark" @click="back" value="Indietro" />
            </div>
            <div class="col-2">
              <button type="submit" class="btn btn-block btn-primary">{{titleForm}}</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      list: [],
      alertPrice: {},
      visualizzaForm: false,
      urlApi: 'https://gcrypto.herokuapp.com',
      service: '/alert-prices',
      titleForm: 'Salva',
    };
  },
  created() {
    this.getAllEntities();
  },
  methods: {
    saveEntity() {
      return axios.post(this.urlApi + this.service, this.alertPrice, {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      })
        .then((response) => {
          this.visualizzaForm = false;
          this.getAllEntities();
          return response.data;
        }).catch(error => `An error occured..${error}`);
    },
    prepareInsert() {
      this.alertPrice = {};
      this.visualizzaForm = true;
    },
    deleteEntity(id) {
      axios
        .delete(`${this.urlApi + this.service}/${id}`)
        .then(() => this.getAllEntities());
    },
    getAllEntities() {
      axios
        .get(this.urlApi + this.service)
        .then((response) => {
          this.list = response.data;
        });
    },
    editEntity(id) {
      axios
        .get(`${this.urlApi + this.service}/${id}`)
        .then((response) => {
          this.alertPrice = response.data;
          this.visualizzaForm = true;
        });
    },
    back() {
      this.visualizzaForm = false;
    },
  },
};
</script>
