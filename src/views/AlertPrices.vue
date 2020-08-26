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

      <table class="table table-responsive-sm table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Pair</th>
            <th>Price</th>
            <th>Enable</th>
            <th>Support</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) of list" :key="index">
            <td>{{ row.id_parametro_pair_cv}}</td>
            <td>{{ row.price}}</td>
            <td><input type="checkbox" onclick="return false;" v-model="row.flag_enable"/></td>
            <td><input type="checkbox" onclick="return false;" v-model="row.is_support"/></td>
            <td>
              <a href="#" @click="prepareEdit(row.id)">
                <i class="far fa-edit"></i>
              </a>
              <a href="#" @click="deleteAlert(row.id)">
                <i class="far fa-trash-alt" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-center" v-if="showLoader">
      <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="container" v-if="visualizzaForm">
      <form @submit.prevent="saveAlert">
        <div class="form-group row justify-content-md-center">
          <label for="select" class="col-2">ID</label>
          <select
            v-model="alertPrice.id_parametro_pair_cv"
            class="form-control col-3 col-sm-3 col-md-4 col-lg-2"
          >
            <option
              v-for="(row,index) of parametroPairs"
              :key="index"
              v-bind:value="row.id"
            >{{row.first_cv + '/' + row.second_cv}}</option>
          </select>
        </div>
        <div class="form-group row justify-content-md-center">
          <label class="col-2" for="Price">Price</label>
          <div class="col-sm-6 col-md-6 col-lg-2">
            <input type="text" class="form-control" v-model="alertPrice.price" />
          </div>
        </div>

        <!---->
        <div class="form-group row justify-content-md-center">
          <div class="col-4 col-sm-2" for="Enable">Enable</div>
          <div class="form-check col-4 col-sm-2">
            <input class="form-check-input" type="checkbox" v-model="alertPrice.flag_enable" />
          </div>
        </div>

        <div class="form-group row justify-content-md-center">
          <div class="col-4 col-sm-2" for="Support">Support</div>
          <div class="form-check col-4 col-sm-2">
            <input class="form-check-input" type="checkbox" v-model="alertPrice.is_support" />
          </div>
        </div>
        <div class="form-group row justify-content-md-center">
          <div class="col-4 col-md-2 col-lg-2">
            <input type="button" class="btn btn-block btn-dark" @click="back" value="Indietro" />
          </div>
          <div class="col-4 col-md-2 col-lg-2">
            <button type="submit" class="btn btn-block btn-primary">{{titleForm}}</button>
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
      servicePair: '/parametro-pair-cvs',
      titleForm: 'Salva',
      currentId: null,
      showLoader: false,
    };
  },
  created() {
    this.getAllEntities();
    this.getParametroPair();
  },
  methods: {
    saveAlert() {
      this.showLoader = true;
      if (this.currentId) {
        return axios
          .put(`${this.urlApi + this.service}/${this.currentId}`, this.alertPrice, {
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json',
            },
          })
          .then((response) => {
            this.showLoader = false;
            this.$swal('Alert Price', 'Salvataggio avvenuto con successo', 'success').then(() => {
              this.visualizzaForm = false;
              this.getAllEntities();
              return response.data;
            });
          })
          .catch(error => `An error occured..${error}`);
      }
      return axios.post(this.urlApi + this.service, this.alertPrice, {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      })
        .then((response) => {
          this.showLoader = false;
          this.$swal('Alert Price', 'Salvataggio avvenuto con successo', 'success').then(() => {
            this.visualizzaForm = false;
            this.getAllEntities();
            return response.data;
          });
        }).catch(error => `An error occured..${error}`);
    },
    prepareInsert() {
      this.alertPrice = {};
      this.visualizzaForm = true;
      this.currentId = null;
    },
    getParametroPair() {
      axios
        .get(this.urlApi + this.servicePair)
        .then((response) => {
          this.parametroPairs = response.data;
        });
    },
    deleteAlert(id) {
      this.$swal({
        title: 'Sei sicuro?',
        text: 'La cancellazione è definita',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Procedi',
        cancelButtonText: 'No',
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          axios
            .delete(`${this.urlApi + this.service}/${id}`)
            .then(() => {
              this.$swal('Cancellato', 'Alert price cancellato', 'success');
              this.getAllEntities();
            });
        }
      });
    },
    getAllEntities() {
      this.showLoader = true;
      axios
        .get(this.urlApi + this.service)
        .then((response) => {
          this.list = response.data;
          this.showLoader = false;
        });
    },
    prepareEdit(id) {
      this.showLoader = true;
      this.currentId = id;
      axios
        .get(`${this.urlApi + this.service}/${id}`)
        .then((response) => {
          this.alertPrice = response.data;
          this.visualizzaForm = true;
          this.showLoader = false;
        });
    },
    back() {
      this.visualizzaForm = false;
    },
  },
};
</script>
