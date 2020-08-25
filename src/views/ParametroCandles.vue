<template>
  <div>
    <div class="container" v-if="!visualizzaForm">
      <h1>Parametro Candles</h1>
      <div class="col-12 text-right">
        <a href="#" @click="prepareInsert">
          <i class="fas fa-plus-circle" />
        </a>
      </div>
      <table class="table table-striped">
        <thead class="table table-dark">
          <tr>
            <th>Parametro Pair</th>
            <th>Intervallo</th>
            <th>Alert Low</th>
            <th>Alert Medium</th>
            <th>Alert High</th>
            <th>Percentual</th>
            <th>BB count</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) of list" :key="index">
            <td>{{row.id_parametro_pair_cv}}</td>
            <td>{{row.intervallo }}</td>
            <td>{{row.diff_alert_low}}</td>
            <td>{{row.diff_alert_medium}}</td>
            <td>{{row.diff_alert_high}}</td>
            <td>{{row.perc_alert}}</td>
            <td>{{row.bearish_bullish_count}}</td>
            <td>
              <a href="#" @click="editCandle(row.id)">
                <i class="far fa-edit"></i>
              </a>
              <a href="#" @click="deleteCandle(row.id)">
                <i class="far fa-trash-alt" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container bg bg-light border rounded py-3" v-else>
      <h3 class="bg-white">Form Parametro Candles</h3>
      <div class="container">
        <form @submit.prevent="saveCandle">
          <div class="form-group row justify-content-md-center">
            <label for="select" class="col-2">Parametro Pair:</label>
            <select
              v-model="parametroCandle.id_parametro_pair_cv"
              class="form-control col-sm-5 col-md-5 col-lg-2"
            >
              <option v-for="(row,index) of parametroPairs" :key="index" v-bind:value="row.id">
                {{row.first_cv +'/'+ row.second_cv}}
              </option>
            </select>
          </div>

          <div class="form-group row justify-content-md-center">
            <label for="alert" class="col-2">Intervallo:</label>
            <div class="col-sm-6 col-md-6 col-lg-2">
              <input
                type="text"
                class="form-control"
                id="alert"
                v-model="parametroCandle.intervallo"
              />
            </div>
          </div>
          <div class="form-group row justify-content-md-center">
            <label for="alert" class="col-2">Alert Low:</label>
            <div class="col-sm-6 col-md-6 col-lg-2">
              <input
                type="text"
                class="form-control"
                id="alert"
                v-model="parametroCandle.diff_alert_low"
              />
            </div>
          </div>
          <div class="form-group row justify-content-md-center">
            <label for="alert" class="col-2">Alert Medium:</label>
            <div class="col-sm-6 col-md-6 col-lg-2">
              <input
                type="text"
                class="form-control"
                id="alert"
                v-model="parametroCandle.diff_alert_medium"
              />
            </div>
          </div>
          <div class="form-group row justify-content-md-center">
            <label for="alert" class="col-2">Alert High:</label>
            <div class="col-sm-6 col-md-6 col-lg-2">
              <input
                type="text"
                class="form-control"
                id="alert"
                v-model="parametroCandle.diff_alert_high"
              />
            </div>
          </div>

          <!---->
          <div class="form-group row justify-content-md-center">
            <!-- form-group row-->
            <div class="col-4 col-sm-2">Percentual:</div>
            <div class="col-4 col-sm-2 col-md-6 col-lg-2">
              <input
                class="form-control"
                type="text"
                id="gridCheck1"
                v-model="parametroCandle.perc_alert"
              />
            </div>
          </div>
          <div class="form-group row justify-content-md-center">
            <div class="col-4 col-sm-2">BB Count:</div>
            <div class="col-4 col-sm-2 col-md-6 col-lg-2">
              <input
                class="form-control"
                type="text"
                id="gridCheck1"
                v-model="parametroCandle.bearish_bullish_count"
              />
            </div>
          </div>
          <div class="form-group row justify-content-md-center">
            <div class="col-sm-6 col-md-6 col-lg-2">
              <input type="botton" class="btn btn-dark col-4 col-sm-8" @click="back" value="Back" />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
              <button type="submit" class="btn btn-primary col-4 col-sm-8">Salva</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      list: [],
      visualizzaForm: false,
      parametroCandle: {},
      urlApi: 'https://gcrypto.herokuapp.com',
      service: '/parametro-candle-cvs',
      servicePairs: '/parametro-pair-cvs',
      parametroPairs: [],
    };
  },
  created() {
    this.getAllEntities();
    this.getParametriPairs();
  },
  methods: {
    saveCandle() {
      return axios
        .post(this.urlApi + this.service, this.parametroCandle, {
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
        })
        .then((response) => {
          this.visualizzaForm = false;
          this.getAllEntities();
          return response.data;
        })
        .catch(error => `An error occured..${error}`);
    },
    prepareInsert() {
      this.parametroCandle = {};
      this.visualizzaForm = true;
    },

    deleteCandle(id) {
      axios
        .delete(`${this.urlApi + this.service}/${id}`)
        .then(() =>
          this.getAllEntities(),
        );
    },
    getAllEntities() {
      axios
        .get(this.urlApi + this.service)
        .then((response) => {
          this.list = response.data;
        });
    },
    getParametriPairs() {
      axios
        .get(this.urlApi + this.servicePairs)
        .then((response) => {
          this.parametroPairs = response.data;
        });
    },
    editCandle(id) {
      axios
        .get(`${this.urlApi + this.service}/${id}`)
        .then((response) => {
          this.parametroCandle = response.data;
          this.visualizzaForm = true;
        });
    },
    back() {
      this.visualizzaForm = false;
    },
  },
};
</script>
