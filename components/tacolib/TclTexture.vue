<template>
  <div :class="['tcltexture-base', 'tcltexture-'+pattern]" :style="propstyle">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'TclTexture',
  props: {
    pattern: {
      type: String,
      default: 'check-01'
    },
    color1: {
      type: String,
      default: '#F0F0F0'
    },
    color2: {
      type: String,
      default: '#0B2342'
    },
    color3: {
      type: String,
      default: '#51a9df'
    }
  },
  computed: {
    propstyle () {
      return {
        '--color1': `${this.hx2r(this.color1)}, ${this.hx2g(this.color1)}, ${this.hx2b(this.color1)}`,
        '--color2': `${this.hx2r(this.color2)}, ${this.hx2g(this.color2)}, ${this.hx2b(this.color2)}`,
        '--color3': `${this.hx2r(this.color3)}, ${this.hx2g(this.color3)}, ${this.hx2b(this.color3)}`
      }
    }
  },
  methods: {
    hx2r (hx) {
      return parseInt(hx.substring(1, 3), 16).toString()
    },
    hx2g (hx) {
      return parseInt(hx.substring(3, 5), 16).toString()
    },
    hx2b (hx) {
      return parseInt(hx.substring(5, 7), 16).toString()
    }
  }
  /*
  data: () => ({
    email: ''
  })
  */
}
</script>
<style scoped lang="scss">
.tcltexture-base{
    background-repeat: repeat;
}
.tcltexture-check-01 {
  background:
    radial-gradient(rgb(var(--color3)) 3px, transparent 4px),
    radial-gradient(rgb(var(--color3)) 3px, transparent 4px),
    linear-gradient(rgb(var(--color1)) 4px, transparent 0),
    linear-gradient(45deg, transparent 74px, transparent 75px, rgb(var(--color2)) 75px, rgb(var(--color2)) 76px, transparent 77px, transparent 109px),
    linear-gradient(-45deg, transparent 75px, transparent 76px, rgb(var(--color2)) 76px, rgb(var(--color2)) 77px, transparent 78px, transparent 109px), rgb(var(--color1));
  background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
}
.tcltexture-check-02 {
  background-color:rgb(var(--color1));
  background-image:
    repeating-linear-gradient(transparent, transparent 50px, rgb(var(--color3)) 50px, rgb(var(--color3)) 53px,
      transparent 53px, transparent 63px, rgb(var(--color3)) 63px, rgb(var(--color3)) 66px, transparent 66px,
      transparent 116px, rgba(var(--color2),.5) 116px, rgba(var(--color2),.5) 166px, rgba(var(--color2),.2) 166px,
      rgba(var(--color2),.2) 169px, rgba(var(--color2),.5) 169px, rgba(var(--color2),.5) 179px, rgba(var(--color2),.2) 179px,
      rgba(var(--color2),.2) 182px, rgba(var(--color2),.5) 182px, rgba(var(--color2),.5) 232px, transparent 232px),
    repeating-linear-gradient(270deg, transparent , transparent 50px, rgb(var(--color3)) 50px, rgb(var(--color3)) 53px,
      transparent 53px, transparent 63px, rgb(var(--color3)) 63px, rgb(var(--color3)) 66px, transparent 66px, transparent 116px,
      rgba(var(--color2),.5) 116px, rgba(var(--color2),.5) 166px, rgba(var(--color2),.2) 166px, rgba(var(--color2),.2) 169px,
      rgba(var(--color2),.5) 169px, rgba(var(--color2),.5) 179px, rgba(var(--color2),.2) 179px, rgba(var(--color2),.2) 182px,
      rgba(var(--color2),.5) 182px, rgba(var(--color2),.5) 232px, transparent 232px);
}
.tcltexture-check-03 {
  background:
    linear-gradient(-135deg, rgba(var(--color1),1) 10%, transparent),
    repeating-linear-gradient(45deg, rgba(var(--color2),1) 0%, rgba(var(--color2),.6) 5%, transparent 5%, transparent 10%),
    repeating-linear-gradient(-45deg, rgba(var(--color3),.4) 0%, rgba(var(--color3),.5) 5%, transparent 5%, transparent 10%);
  background-color: rgb(var(--color1));
}
.tcltexture-3dbox-01{
  background:
    conic-gradient(from 45deg,rgba(var(--color3), 1) 0,rgba(var(--color3), 1) 90deg,rgba(var(--color3), 0.8) 90deg,
    rgba(var(--color3), 0.8) 180deg,rgba(var(--color3), 0.6) 180deg,rgba(var(--color3), 0.6) 270deg,
    rgba(var(--color3), 0.5) 270deg,rgba(var(--color3), 0.5) 360deg),rgb(var(--color1));
  background-size: 5px 5px;
}
.tcltexture-3dbox-02{
  background:
    linear-gradient(45deg, rgb(var(--color2)) 12%, transparent 0, transparent 88%, rgb(var(--color2)) 0),
    linear-gradient(135deg, transparent 37%, rgb(var(--color3)) 0, rgb(var(--color3)) 63%, transparent 0),
    linear-gradient(45deg, transparent 37%, rgb(var(--color2)) 0, rgb(var(--color2)) 63%, transparent 0),
    rgb(var(--color1));
  background-size: 40px 40px;
}
.tcltexture-3dbox-03{
  background-color:  rgb(var(--color1));
  opacity: 0.8;
  background-image: radial-gradient( ellipse farthest-corner at 10px 10px ,
    rgb(var(--color3)), rgb(var(--color3)) 50%, rgb(var(--color1)) 80%);
  background-size: 10px 10px;
}
.tcltexture-3dbox-04{
  background-color: rgb(var(--color1));
  opacity: 0.8;
  background:
    linear-gradient(135deg, rgba(var(--color3), 0.8) 25%, transparent 25%) -10px 0/ 20px 20px,
    linear-gradient(225deg, rgba(var(--color3), 0.6) 25%, transparent 25%) -10px 0/ 20px 20px,
    linear-gradient(315deg, rgba(var(--color3), 0.8) 25%, transparent 25%) 0px 0/ 20px 20px,
    linear-gradient(45deg, rgba(var(--color3), 0.8) 25%, rgb(var(--color1)) 25%) 0px 0/ 20px 20px;
}

.tcltexture-marks-01{
  background-color: rgb(var(--color1));
  background-size: 56px 56px;
  background-image:
    linear-gradient(135deg,transparent 55%,rgb(var(--color1)) 55%),
    radial-gradient(transparent 6px,rgb(var(--color3)) 6px,rgb(var(--color3)) 10px,
      transparent 10px,transparent 15px,rgb(var(--color3)) 15px, rgb(var(--color3)) 19px,
      transparent 19px,transparent 24px,rgb(var(--color3)) 24px,rgb(var(--color3)) 28px,
      transparent 28px);
  }
  .tcltexture-marks-02{
    background-color: rgb(var(--color1));
    background-size: 53px 53px;
    background-image:
      radial-gradient(transparent 28px,rgb(var(--color3)) 28px,rgb(var(--color3)) 32px,transparent 32px);
  }
  .tcltexture-marks-03{
    background-color: rgb(var(--color1));
    background-size: 48px 48px;
    background-image:
      radial-gradient(transparent 20px,rgb(var(--color3)) 20px,rgb(var(--color3)) 24px,transparent 24px),
      radial-gradient(transparent 20px,rgb(var(--color3)) 20px,rgb(var(--color3)) 24px,transparent 24px);
    background-position: 0 0 , 24px 24px;
  }
  .tcltexture-marks-04{
    background:
      radial-gradient(circle closest-side at 60% 43%, rgb(var(--color1)) 26%, rgba(187,0,51,0) 27%),
      radial-gradient(circle closest-side at 40% 43%, rgb(var(--color1)) 26%, rgba(187,0,51,0) 27%),
      radial-gradient(circle closest-side at 40% 22%, rgb(var(--color3)) 45%, rgba(221,51,85,0) 46%),
      radial-gradient(circle closest-side at 60% 22%, rgb(var(--color3)) 45%, rgba(221,51,85,0) 46%),
      radial-gradient(circle closest-side at 50% 35%, rgb(var(--color3)) 30%, rgba(221,51,85,0) 31%),

      radial-gradient(circle closest-side at 60% 43%, rgb(var(--color1)) 26%, rgba(187,0,51,0) 27%) 50px 50px,
      radial-gradient(circle closest-side at 40% 43%, rgb(var(--color1)) 26%, rgba(187,0,51,0) 27%) 50px 50px,
      radial-gradient(circle closest-side at 40% 22%, rgb(var(--color3)) 45%, rgba(221,51,85,0) 46%) 50px 50px,
      radial-gradient(circle closest-side at 60% 22%, rgb(var(--color3)) 45%, rgba(221,51,85,0) 46%) 50px 50px,
      radial-gradient(circle closest-side at 50% 35%, rgb(var(--color3)) 30%, rgba(221,51,85,0) 31%) 50px 50px;
      background-color:rgb(var(--color1));
      background-size:100px 100px;
  }
  .tcltexture-marks-05{
    background:
      linear-gradient(324deg, rgb(var(--color1)) 4%,   transparent 4%) -70px 43px,
      linear-gradient( 36deg, rgb(var(--color1)) 4%,   transparent 4%) 30px 43px,
      linear-gradient( 72deg, rgb(var(--color3)) 8.5%, transparent 8.5%) 30px 43px,
      linear-gradient(288deg, rgb(var(--color3)) 8.5%, transparent 8.5%) -70px 43px,
      linear-gradient(216deg, rgb(var(--color3)) 7.5%, transparent 7.5%) -70px 23px,
      linear-gradient(144deg, rgb(var(--color3)) 7.5%, transparent 7.5%) 30px 23px,

      linear-gradient(324deg, rgb(var(--color1)) 4%,   transparent 4%) -20px 93px,
      linear-gradient( 36deg, rgb(var(--color1)) 4%,   transparent 4%) 80px 93px,
      linear-gradient( 72deg, rgb(var(--color3)) 8.5%, transparent 8.5%) 80px 93px,
      linear-gradient(288deg, rgb(var(--color3)) 8.5%, transparent 8.5%) -20px 93px,
      linear-gradient(216deg, rgb(var(--color3)) 7.5%, transparent 7.5%) -20px 73px,
      linear-gradient(144deg, rgb(var(--color3)) 7.5%, transparent 7.5%) 80px 73px;
    background-color: rgb(var(--color1));
    background-size: 100px 100px;
  }
  .tcltexture-marks-06{
    background-color: rgb(var(--color1));
    background-image: linear-gradient(335deg, rgba(var(--color3), 0.8) 23px, transparent 23px),
      linear-gradient(155deg, rgba(var(--color3), 0.6) 23px, transparent 23px),
      linear-gradient(335deg, rgba(var(--color3), 0.8) 23px, transparent 23px),
      linear-gradient(155deg, rgba(var(--color3), 0.6) 23px, transparent 23px);
    background-size: 58px 58px;
    background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
  }
  .tcltexture-marks-07{
    background-color:rgb(var(--color3));
    background-image:
      radial-gradient(circle at 100% 150%, rgb(var(--color3)) 24%, rgb(var(--color1)) 24%, rgb(var(--color1)) 28%, rgb(var(--color3)) 28%, rgb(var(--color3)) 36%, rgb(var(--color1)) 36%, rgb(var(--color1)) 40%, transparent 40%, transparent),
      radial-gradient(circle at 0    150%, rgb(var(--color3)) 24%, rgb(var(--color1)) 24%, rgb(var(--color1)) 28%, rgb(var(--color3)) 28%, rgb(var(--color3)) 36%, rgb(var(--color1)) 36%, rgb(var(--color1)) 40%, transparent 40%, transparent),
      radial-gradient(circle at 50%  100%, rgb(var(--color1)) 10%, rgb(var(--color3)) 10%, rgb(var(--color3)) 23%, rgb(var(--color1)) 23%, rgb(var(--color1)) 30%, rgb(var(--color3)) 30%, rgb(var(--color3)) 43%, rgb(var(--color1)) 43%, rgb(var(--color1)) 50%, rgb(var(--color3)) 50%, rgb(var(--color3)) 63%, rgb(var(--color1)) 63%, rgb(var(--color1)) 71%, transparent 71%, transparent),
      radial-gradient(circle at 100% 50%, rgb(var(--color1)) 5%, rgb(var(--color3)) 5%, rgb(var(--color3)) 15%, rgb(var(--color1)) 15%, rgb(var(--color1)) 20%, rgb(var(--color3)) 20%, rgb(var(--color3)) 29%, rgb(var(--color1)) 29%, rgb(var(--color1)) 34%, rgb(var(--color3)) 34%, rgb(var(--color3)) 44%, rgb(var(--color1)) 44%, rgb(var(--color1)) 49%, transparent 49%, transparent),
      radial-gradient(circle at 0    50%, rgb(var(--color1)) 5%, rgb(var(--color3)) 5%, rgb(var(--color3)) 15%, rgb(var(--color1)) 15%, rgb(var(--color1)) 20%, rgb(var(--color3)) 20%, rgb(var(--color3)) 29%, rgb(var(--color1)) 29%, rgb(var(--color1)) 34%, rgb(var(--color3)) 34%, rgb(var(--color3)) 44%, rgb(var(--color1)) 44%, rgb(var(--color1)) 49%, transparent 49%, transparent);
    background-size: 100px 50px;
  }
  .tcltexture-marks-08{
    background:
      linear-gradient(-45deg, rgb(var(--color1)) 25%, transparent 25%, transparent 75%, rgb(var(--color3)) 75%, rgb(var(--color3))) 0 0,
      linear-gradient(-45deg, rgb(var(--color3)) 25%, transparent 25%, transparent 75%, rgb(var(--color1)) 75%, rgb(var(--color1))) 1em 1em,
      linear-gradient(45deg, rgb(var(--color3)) 17%, transparent 17%, transparent 25%, rgb(var(--color3)) 25%, rgb(var(--color3)) 36%,
      transparent 36%, transparent 64%, rgb(var(--color3)) 64%, rgb(var(--color3)) 75%, transparent 75%, transparent 83%, rgb(var(--color3)) 83%) 1em 1em;
    background-color: rgb(var(--color1));
    background-size: 2em 2em;
  }
  .tcltexture-stripe-01{
    background-color: rgb(var(--color2));
    background-image:
      repeating-linear-gradient(45deg, transparent, transparent 35px, rgb(var(--color3)) 35px, rgb(var(--color3)) 70px);
  }
  .tcltexture-stripe-02{
    background:
      repeating-linear-gradient(-165deg,rgb(var(--color2)),rgb(var(--color2)) 0 3px, transparent 0 7px) 0 0/ 100% 50% no-repeat,
      repeating-linear-gradient( 165deg,rgb(var(--color2)),rgb(var(--color2)) 0 3px, transparent 0 7px) 0 100%/ 100% 50% no-repeat,
      linear-gradient(90deg, rgb(var(--color1)), rgb(var(--color3)));
  }
  .tcltexture-stripe-03{
    background:
      linear-gradient(90deg,rgb(var(--color1)) 0.25em, transparent 0),
      linear-gradient(90deg,rgb(var(--color2)) 50%, transparent 0),
      linear-gradient(90deg,rgb(var(--color3)) 50%, rgb(var(--color3)) 0);
    background-size:.25*9em, .5*9em, 9em;
  }
  .tcltexture-dots-01{
    $dot-size: 1px;
    $dot-space: 22px;
    background:
      linear-gradient(90deg, rgba(var(--color1),1) ($dot-space - $dot-size), transparent 1%) center,
      linear-gradient(rgba(var(--color1),1) ($dot-space - $dot-size), transparent 1%) center,
      rgba(var(--color2),1);
    background-size: $dot-space $dot-space;
  }
  .tcltexture-dots-02{
    background:
      radial-gradient(black 15%, transparent 16%) 0 0,
      radial-gradient(black 15%, transparent 16%) 8px 8px,
      radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
      radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
      background-color:rgba(var(--color2),1);
      background-size:16px 16px;
  }
  .tcltexture-dots-03{
    background-color:rgba(var(--color2),1);
    background-image:
      radial-gradient(rgba(var(--color1),1) 15%, transparent 16%),
      radial-gradient(rgba(var(--color1),1) 15%, transparent 16%);
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px;
  }
</style>
