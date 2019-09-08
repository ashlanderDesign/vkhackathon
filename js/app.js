const app = new Vue({
      el: "#app",
      data: {
        page: "News",
        user: {
          authKey: null,
          login: null
        },
        interests: [{
            id: 1,
            title: "Спорт",
            icon: "icon_test.png",
            tag: 'sport',
            isSelected: false
          },
          {
            id: 2,
            title: "Политика",
            icon: "icon_test.png",
            tag: 'politics',
            isSelected: false
          },
          {
            id: 3,
            title: "Музыка",
            icon: "icon_test.png",
            tag: 'music',
            isSelected: false
          },
          {
            id: 4,
            title: "Кино",
            icon: "icon_test.png",
            tag: 'cinema',
            isSelected: false
          },
          {
            id: 5,
            title: "Юмор",
            icon: "icon_test.png",
            tag: 'humour',
            isSelected: false
          },
          {
            id: 6,
            title: "Театр",
            icon: "icon_test.png",
            tag: 'theatre',
            isSelected: false
          },
          {
            id: 7,
            title: "Криминал",
            icon: "icon_test.png",
            tag: 'criminal',
            isSelected: false
          },
          {
            id: 8,
            title: "IT",
            icon: "icon_test.png",
            tag: 'it',
            isSelected: false
          }
        ],
        posts: [{
            id: 1,
            title: 'Зеленский проспорил украинскому мэру',
            content: `Мэр города Днепр Борис Филатов рассказал о выигранном у президента Украины Владимира Зеленского споре. По условиям пари, заключенного 12 июля, Филатов должен был подать в отставку, если Центральный мост не будет отремонтирован до середины сентября. Об этом сообщает «Украина.ру».
            В своем Facebook - аккаунте Филатов рассказал,
            что на отремонтированном мосту появилось символическое кресло градоначальника,
            в котором может посидеть каждый днепрянин.Он также подчеркнул,
            что никогда не держался за свой пост и готов расстаться с ним« хоть завтра»,
            например,
            в обмен на аэропорт.
            В июле сообщалось,
            что,
            согласно условиям спора,
            в случае проигрыша Филатову Зеленский должен будет что - нибудь выпить на дне рождения Днепра.Украинский президент также пообещал,
            что приедет проверять готовность моста вместе со своей командой к обозначенной дате.«Президент сам,
            первый,
            на КамАЗе будет ехать через мост»,
            —сообщил глава офиса Зеленского Андрей Богдан.
            `,
            images: [
              {image: 'test_politics.jpg', tags: 'politics', age: '18'},
              {image: 'test_humour.jpg', tags: 'politics, humour', age: '38'}
            ]
          }
          ],
          selectedInterests: [],
          konnektShown: true,
          selectionShow: false,
          AgeInputShow: false,
          age: "",
          postId: null
        },
        mounted() {
          if(!localStorage.getItem('age') && !localStorage.getItem('interests')){
            localStorage.setItem('age', 70);
            localStorage.setItem('interests', json.stringify(this.interests));
          }
        },
        methods: {
          save: function() {
            this.interests.forEach((inter) => {
              if (inter.isSelected) {
                this.selectedInterests.push({
                  id: inter.id,
                  title: inter.title,
                  icon: inter.icon,
                  tag: inter.tag
                });
              }
            });
            localStorage.setItem("interests", JSON.stringify(this.selectedInterests));
            localStorage.setItem("age", this.age);
            this.konnektShown = false;
          },
          chooseImage: function(post){
            let age = localStorage.getItem('age');
            let interests = JSON.parse(localStorage.getItem('interests'));
            let userTags = [];
            //console.log(interests);
            interests.forEach((interest)=>{
              userTags.push(interest.tag);
            });
            console.log(userTags);
            post.images.forEach((image)=>{
              let tags = image.tags.split(', ');
              console.log(tags);
              tags.forEach((tag)=>{
                iTag = tag;
                console.log(userTags.includes(iTag));
              });
            });
            return 'test.jpg';
          }
        }
      });
