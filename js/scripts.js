// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            emails :[]
        };
    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) =>{
                this.emails.push(res.data.response);
            })
            
        }
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');