<template>
  <header class="nav-bar">
    <div class="nav-bar__logo">
      <router-link to="/" exact>
        <svg class="icon" :class="{ isActiveHome: $route.path === '/' }">
          <use xlink:href="#svg-editor-image"></use>
        </svg>
      </router-link>
    </div>
    <div class="nav-bar__inner">
      <nav class="nav-bar__contact">
        <router-link
          to="/aboutme"
          class="nav-bar__my-contact"
          :class="{ isActiveHome: $route.path === '/' }"
          exact
          >Обо мне
        </router-link>
        <router-link
          to="/portfolio"
          class="nav-bar__my-contact"
          :class="{ isActiveHome: $route.path === '/' }"
          exact
          >Портфолио
        </router-link>
      </nav>
      <a
        href="mailto:vit4ly.kiselev@gmail.com"
        class="btn"
        :class="{ isActiveHome: $route.path === '/' }"
        >Связаться со мной</a
      >
    </div>
  </header>
  <svg width="0" height="0" class="hidden">
    <symbol
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 232 90"
      id="svg-editor-image"
    >
      <title>background</title>
      <path fill="none" d="M-1-1h234v92H-1z"></path>
      <title>Layer 1</title>
      <image
        fill="none"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACWCAYAAAAv82Y/AAAuAklEQVR4Xu2dCbxN1fv/zXNERShTIZok0SSakChFX9GkSaVQyZT0zZR8i6TSnBSigZQiUiopVAiZhwgpcxkz/N+f/dvr/Pc5zh3Ovedc173Pfr326wx7jZ+91rOeaT0rRw67DAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMASyAQI5s0Efk+1it27dPvnrr78q79+/vzAJD3Hv594yfPjwWtkdG+u/IZAUAnmyOzQbNmyoDgbFuIv6hGMPn/9md1ys/4ZAcghke8LhgyMuY69POA7YkDEEDIHkEchlAHkISGQ76GMhTAwXGxiGQDII2AT5P6IhHMR95efObYTD5owhkDwCJqrkyLEViCSe/O1zHvr+lw0cQ8AQMAQMAUPAEIgjAlnGHNujR48Jv//+e40ANjKteubV448/ft2JJ564uHPnznfHETsryhDItghkGVEFonEOb7FMtDe5adOmMtxls+1bto4bAnFGILsoR53SM87wWXGGQPZEICsRjpT6ktLz7DkCrNeGQBoQyEqTKSV9TVbqaxpetWUxBOKHQFaaTCn1JSXCEj9UrSRDIIsjkNJkO5q6LwtKcldKz4+mvlpbDYEjikCWIRxFixaVI1fUq1ChQrtLliz5+xFF2io3BLIQAlnGHIufxvwdO3Zoh2uQGHpcRvHixZdWrFhxZhZ6b9YVQ8AQMAQMAUPAEDAEDAFDwBAwBAwBQ8AQMAQMAUPAEEgnAhnu28CekRPnzZt32caNG0/5448/Kq1bt64K/51EPyLNpa5tkYF1dhMntFW1atVmp7PvMWffu3evlMlqZ6pwy5kz56F8+fJZRLGYkbYMmR2BDLOq/PPPP8esWrWqxtChQ3usWLHiEoDJx62gObFe/6QxX6z1HJb+l19+uRzicUzgQbIEBKKxi813S/Pnz78rb968ewoWLLiN70ZI0v0mrIAjjUCGEA4iiOccP378vR9//PFjdFgm0yN+fffdd81GjRrVF4J2gs9FuG34apu+H8T/Y91LL710vmvsF1988cDixYsb8ltckCMaQeKh745z8srLlSvX3rJlyy4oU6bMgpo1a47fuXPn1MKFC+884gBYAwyBdCCQIYRj5cqVtSAaj0YjGkysf/PkySMuwk04TT53iyPR7Sak0uxOR39DWadNm3bbnj17Tk+uLLiLSO5AeOVNof4wgnLw4MFCa9eura175syZtzRr1uwxxLR3S5UqtTYe/bAyDIEjgUDCCQcretGBAwf2o3PHBjsIG78Nb8/Vxx577Gom0SqfcDgCEZx8joi47AfJm27igbhU88CB5KUGnqdEJGJ9Z3k/+uijAd98881tnOXS4IQTTlgXawGW3hDIDAgknHBMnTq1DRxHvWBnYdXXn3XWWWOvuuqql8qXL//rkQACopCavoe55EOw/i5SpMgftFd586D89AjcoUOHlC6o3PXEFK48+/btK/Lvv+HHtGzZsqX6kCFDRv39999NjjnmGMU6tcsQOKoQSM3kSXOHmJw5H3300dYUIEWod6Ek3NykSZM+jRs3fjnNBccnY6osI8GqIHafcn/Gf44LSmqvj0dEEIWOkZiGUvgSdBsnQURCda5Zs6Yu4lsn/utjlpf4vFArJeMQSCjh2LZt24mYXCsHu8OekemZgGioSTFv8LvyyiuHp+XVYI25bPr06Tf/9NNPrVAUF/DLyImepW3t2rU/4vfctJSb1jxYtp5avnx5jb59+16nDYBpLSeYb8SIEY+88847XUeOHHkGMV436hn19KOes6mnOfXowKuEX9u3by/RsWPHSYyxt/7zn/8MjXeF9LMr/exOP6vQzz/jXf7RUl7MkyeWjrGq6nhFhe1z195TTz01w/0vkmhzzBxHLH0PpoVL+bJdu3Z3VK5ceXLwf7iNYqtXrz4rreUq365duwrdc8890x966KEvfD+Tw4pbv359xSuuuOKfl19+ua8eSneDmFQCxW08dTgaS0FTtavnuPTW4/fx+969e4+I7BwLU7lrr7124xNPPPGu0uk5OBTmu471TNQly2CGjZ9EdSI95SaUcDBgq9K4IFezj8kzKz0NjmNed3JbckXGNYYHq+BgKguu8PmxtpyRnj6xku9q0KDB6BkzZlwuZ7poZf3666+1seQUvvjiiyfoefv27Tu99tprtdHX7HDpJ0+e3JyJmR7xUXiGaZuppwv1XEA9spql9ypIAWGEbvPmzaV69uw5HnP3mkceeeQeYVGsWLEt77777ult2rTpn94Kk8ivfurI0Gx9JZRwiPJHUOYDOEFlFmVghhMOfDmWgIcOtXZXbjnFpXcEnnPOOVNVxpw5cy6LLEs+NCiobzr33HN/rVChwsJodZEm91dffdWCZ2lxyHNFuhPx0tudaPk9v5rgA1nrIBofahL36dOncZAIJqIBgTKd57BxHBkAdIKriL14PDjXkEv3em5ZSiSXu3sD3+VnoWdxu5CJVV6YiQVxrlp6K2DFXXrhhRd+CdfQBhbd6VC8YvFcrfr11183RVQZyeTyiDacxWjEm5/E2sOlVLzppptm9e/f/8bHH3/8Lh57FiFk+XZKi0Uo76RJk1rdcMMN80uUKOE9u/zyy9dAjJpFaXeYOz71vEM9P1BPvg8//PD+OnXqHEJZLPE17MKxrsWZZ575z4IFC2omgYUWuBBRQ+lcEKvUYNpeFqJx/XHHHRc6eY/tC6UbNmy4XboIVxZ9yEn9bWm38D+EJetQo0aNfsMBsIMIq0vHuzgVke8TLH1emltvvfV79FMhB8BA2w5bdMhbibzjAnlnuLy0N3+HDh0mdu/e/f1o/dP/PJ9MuoTqHNM7zoL5E93QTEuVX3311QviCWQMZaWG04mhOJRIuLFDNN7gwKmRvl7pZ1cACtkG8leBsHwcKFQTUbqng0RGWzto0CApL98tXbr0iocffvgh/t/Hb48dl9l67ty59XFcG046rfAHUAx2ffDBB8cx0c8744wzfvTLDXrNuqr0nwjZoQsuuOBTJuNguKJL+R1mgoewtbz00kt/RP+1IJmOSwzaDxHIhV/QQDx/67/44ouNCOAU6Ugn4qW+hcbeBx980OF/XL169boXMeZTuJXjUFY3gfvdjfOhJ47C+VVr1arVApTVUyBkZxUoUGAn/ezctm3baYh6F1WvXv2npAgHeU8j70/knRaR9zuJiZT1E4RrAs1+AZ1WVTg/cZ7exe8qrVu3btGpU6f7SXfUiECJJhzCJq56gphmVOZNHFyZ44IPE3gGDmV7mRDN6LZHOFjBCnTp0qUlK/0PiEkrIga+N0gxj++HI9iISTgHA/cAXFHYubn8J53MPUEocV7rhUWoKQRF/jmOcER71+qbp/eg/tVMnNc++eST+5m4w+B+dul/n+Npjj6kA3XtS+aV7cMv5sB7773XfsyYMXe9/fbbdYMTMJBPdYqrC+G6bNmyc6+77rpR11xzzTA/nawhi1weuI5cEJXHIA4z4WBaOJ0M+HVET1ceYvMwaW/y04sghYi/xDzydifvz+S90XF1ft4K5O1M+hsRFb9QfjZ4XsxHiHDwu67+57knbh4tV0J1HIGXF9y/cbRgk6h2BvfExK0OOIffWNU/gXDcwMQsooJZzU5nNb8QFn2YTwCC9QU9cjUO5GuTKisLDnx/w5KLEEWOn6SIoJcOcWnUokWLqslr1zXkxx9/bMCqf0AcSTJgqNy9r7/++i2YdgfiQJf3008/bSXuI4k8Ye2AaC1jxW8FV3YDHNRheQg5edzPP/98MTi9G1TkipCJmPDscurUniZ3hconbwme1yPve45oKJGf93ueNVDek046aRlpRkvfBFHxcBZh53cr/n+f50vjNhgyoKCEEg5tK/eJR1xW1QzA40hUERdxTiw3sv0w9sOcxsT0TLxMyiuIt3qgVq1aUyI6Fu29RH1HcuLDYtPorrvu+hYlrLiEQ7JevPLKK/X5HskhRJYRptQ85ZRTfiEcwi+w897qLdlfE0kED8InfVNyV07M2ms/++yzak8++eQDbD7siOv+NUlkEJcTasvNN9/8P3QtT959993v1a9ffwttfwJdSCmX988//yyLLqjcjTfeOCQwXj2M7r333ifgKnZhUnZzJYzw+3nLJ5G3l583N+/nYL169cbyTi6Fi/F8m/isxO/L+f89JzIdiQGYljoTLao4ltwIR1reTox5WB1nnXbaaX98//33TeE65jzwwAOt6tatO5a9QKtTUdRhnBArep6nn376edjtW1CcdmK1b83+os2UdRBFoEy7kRxKZBlh712WD1b+V5j0A5k0T3EXEquO+qGhuI5k2qhyciNyTcWBcBntQse68iy8kscsXbq0VpUqVeZH5FVZIXGC1V/OZ71xDhs8YcKEO/BneRx9zX/Hjh171/XXX/+Gyztx4sQbzzvvPBFZNy9URk42YubAzKt+6wojhsnk9foezMvu6Gm8izXoeRRW4ld98nsl/3+ViveTqZIkmnCos9GUZpkKhKzSGKwe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"
        height="150"
        width="270"
        y="-29"
        x="-17"
      ></image>
    </symbol>
  </svg>
</template>

<script>
export default {
  name: "TheNavBar",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.icon {
  width: 150px;
  height: 70px;
  margin: 0.5em;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  width: 100%;
  //position: fixed;
  //top: 0;
  //left: 0;
  //right: 0;
  //padding: 0 5vw 0;
  //box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  //border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 2000;

  &__logo {
    &.active {
      svg {
        fill: #fff;
      }
    }
  }

  &__img {
    width: 100%;
    height: auto;
    max-width: 180px;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__contact {
    display: flex;
    justify-content: space-between;
    margin: 0 -15px;
  }

  &__my-contact {
    padding: 0 15px;
    //text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: #263238;
    transition: all 0.3s;

    &:hover {
      color: #304ffe;
    }

    &.active {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      color: #304ffe;
    }
  }
}

.btn {
  margin-left: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 6px 10px;
  font-weight: 500;
  color: #263238;
  transition: all linear 0.3s;
  box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;

  &:hover {
    color: #fff;
    box-shadow: -4px -4px -4px -4px rgba(34, 60, 80, 0.6) inset;
    background: rgb(29, 24, 121);
    background: linear-gradient(
      90deg,
      rgba(29, 24, 121, 1) 11%,
      rgba(61, 90, 254, 1) 85%,
      rgba(48, 79, 254, 1) 100%
    );
  }
}

.isActiveHome {
  color: #fff;
  fill: #ffffff;
}
</style>
