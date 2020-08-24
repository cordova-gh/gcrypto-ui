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
            <th>ID</th>
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
        <div class="form-group row">
          <label for="alert" class="col-sm-2 col-form-label">Intervallo:</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control col-2"
              id="alert"
              v-model="parametroCandle.intervallo"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="alert" class="col-sm-2 col-form-label">Alert Low:</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control col-2"
              id="alert"
              v-model="parametroCandle.diff_alert_low"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="alert" class="col-sm-2 col-form-label">Alert Medium:</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control col-2"
              id="alert"
              v-model="parametroCandle.diff_alert_medium"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="alert" class="col-sm-2 col-form-label">Alert High:</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control col-2"
              id="alert"
              v-model="parametroCandle.diff_alert_high"
            />
          </div>
        </div>

        <!---->
        <div class="form-group row">
          <div class="col-sm-2">Percentual:</div>
          <div class="col-sm-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck1"
                v-model="parametroCandle.perc_alert"
              />
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-2">BB Count:</div>
          <div class="col-sm-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck1"
                v-model="parametroCandle.bearish_bullish_count"
              />
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-5">
            <input type="botton" class="btn btn-dark" @click="back" value="Back" />
            <button type="submit" class="btn btn-primary">Salva</button>
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
      visualizzaForm: false,
      parametroCandle: {},
      urlApi: 'https://gcrypto.herokuapp.com',
      service: '/parametro-candle-cvs',
    };
  },
  created() {
    this.getAllEntities();
  },
  methods: {
    saveEntity() {
      return axios
        .post(this.urlApi + this.service, this.parametroPair, {
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

    deleteEntity(id) {
      axios
        .delete(`${this.urlApi + this.service}/${id}`)
        .then(() => {
          this.getAllEntities();
        });
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
