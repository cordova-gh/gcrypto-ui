<template>
  <div>
    <div class="about">
      <h1>This is a Parametro Pairs page</h1>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Intervallo</th>
            <th>Alert Low</th>
            <th>Alert Medium</th>
            <th>Alert High</th>
            <th>Percentual</th>
            <th>BB count</th>
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
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <form>
        <div class="form-group">
          Id Parametro:
          <select name="id_parametro_pair_cv">
            <option value="1">BTC/USDT</option>
          </select>
          Alert Low:
          <input type="text" />
          Alert Medium:
          <input type="text" />
          Alert High:
          <input type="text" />
          Percentual:
          <input type="checkbox" />
          BB Count:
          <input type="checkbox" />

          <input type="submit" value="Invio" />
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
    };
  },
  created() {
    axios.get('https://gcrypto.herokuapp.com/parametro-candle-cvs').then(
      (response) => {
        this.list = response.data;
      },
    );
  },
};
</script>
