// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            emails :[]
        };
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');