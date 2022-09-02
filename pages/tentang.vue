<template>
  <div class="Tentang">
    <div class="row justify-content-center py-3">
      <div class="col-xl-10 col-lg-10 col-md-10 col-10">
        <h1 class="head-about"></h1>
        <div class="subhead1-about">
        <h4 class="card-header text-center">Tentang Kami</h4>
        <br>
       <h5>Kompack</h5>
          <div class="subhead2-about row justify-content-center py-3">
            <p class="card-text ">Merupakan platform pelayanan
            pengelolaan gudang untuk memudahkan pengguna dalam mengelola urusan
            pergudangan mulai dari proses inbound (penambahan stok), management
            stok, pengemasan, dan pengiriman. Kompack bekerja sama dengan
            pemilik properti sebagai mitra gudang yang sekaligus berperan dalam
            membawahi karyawan atau operator gudang.</p>

          </div>

            <div class="subhead2-about row justify-content-center py-3">
          <p>
            Rasakan pengalaman layanan fulfillment yang mudah, hemat, dan
            beragam manfaat lainnya dari Kompack. Kami juga berkomitmen untuk
            terus mendukung perekonomian dalam negeri dengan memberikan
            kemudahan dalam menjalankan bisnis bagi UMKM dan pebisnis online.
          </p>
        </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    // definePageMeta({
    //     layout: 'default'
    // })

   export default {
    layout:'default',
   }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Public+Sans:ital,wght@1,900&display=swap");
* {
  padding: 0%;
  margin: 0%;
  max-width: 100%;
}
img {
  max-width: 100%;
}
.Tentang {
  margin-top: 40px;
  margin-bottom: 78px;
  text-align: -webkit-center;
}
.head-about {
  font-size: 2rem;
  font-weight: 700;
  line-height: 44.8px;
  letter-spacing: 0.5px;
  color: #222222;
  margin-bottom: 40px;
}
.card-header{
  font-family: poppins;
}
.subhead1-about {
  font-size: 1rem;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0.5px;
  color: #222222;
  text-align: left;
  margin-bottom: 2%;
}
.subhead2-about {
  font-size: 1rem;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0.5px;
  color: #222222;
  text-align: left;
}
.kompack {
  font-size: 1rem;
  font-weight: 600;
  line-height: 22.4px;
  letter-spacing: 0.5px;
  color: #222222;
}
@media (max-width: 450px) {
  .Tentang {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .head-about {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 24px;
  }
    .subhead1-about, .subhead2-about {
        line-height: 25.6px;
    }
    .subhead1-about {
        margin-bottom: 7%;
    }
}
</style>
