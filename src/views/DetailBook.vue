<template>
  <div>
    <div class="pa-2">
      <v-row>
        <v-col md="4"
          ><v-card>
            <v-img
              :src="require('../assets/img/home/harry.jpg')"
              class="white--text align-center"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="650px"
            >
              <div class="mt-5 text-center">
                <v-btn class="white--text caption" href="/watch" outlined height="70px" width="150px"
                  ><h1>ĐỌC SÁCH</h1>
                </v-btn>
              </div>
            </v-img>
          </v-card>
        </v-col>
        <v-col>
          <h1 style="color: #6495ED">DA VINCI CODE</h1>
          <v-spacer></v-spacer>
          <i>Mật mã Da Vinci (2003) </i>
          <v-spacer></v-spacer>
          <br>
          <div>Số trang : <b>722</b>  </div>
          <v-btn
            class="ma-0"
            color="primary"
            dark
          >
          Chia sẻ
          </v-btn>
          <v-btn
            class="ma-6"
            color="red"
            dark
          >
          Yêu thích
          </v-btn>
          <div>Tác giả : <b>Dan Brown</b> </div>
          <div>Thể loại : <b>Trinh thám</b> </div>
          <div>Quốc gia : <b>Mỹ</b></div>
          <div>Ngày phát hành : <b>18/03/2003</b> </div>
          <br>
          <div>
            - Mật mã Da Vinci (tiếng Anh: The Da Vinci Code) là một tiểu thuyết của nhà văn người Mỹ Dan Brown được xuất bản năm 2003 bởi nhà xuất bản Doubleday Fiction. Đây là một trong số các quyển sách bán chạy nhất thế giới với trên 40 triệu quyển được bán ra (tính đến tháng 3 năm 2006), và đã được dịch ra 44 ngôn ngữ.
            <br>
            - Tổng hợp các thể loại hư cấu trinh thám, giật gân và âm mưu, quyển sách là một trong bốn tiểu thuyết liên quan tới nhân vật Robert Langdon, cùng với Thiên thần và Ác quỷ (Angels and Demons), Biểu tượng thất truyền (The Lost Symbol, trước đây được biết đến với tên The Solomon Key)[1] và Hỏa ngục (Inferno).
          </div>
          <br>
          <b>Nhân vật</b>
          <br>
          <br>
         <v-row justify="space-around">
            <v-avatar
              color="indigo"
              size="62"
            >
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>

            <v-avatar
              color="teal"
              size="62"
            >
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>

            <v-avatar
              color="orange"
              size="62"
            >
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>

            <v-avatar
              color="orange"
              size="62"
            >
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>

            <v-avatar
              color="orange"
              size="62"
            >
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>
          </v-row>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<script>
export default {
    name: 'Detail'
};
</script>

<style>
</style> 