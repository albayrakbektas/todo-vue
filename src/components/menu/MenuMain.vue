<template>
  <div class="menu-container">
    <div class="left-arrow-icon-container">
      <div @click="openMenu" class="left-arrow-icon menu-close-button">
        <span class="material-symbols-outlined"> navigate_before </span>
      </div>
    </div>
    <div class="avatar-container">
      <div class="avatar">
        <img
          class="profile-image"
          src="https://media-exp1.licdn.com/dms/image/D5603AQHtBcScJxjpLw/profile-displayphoto-shrink_400_400/0/1644421623439?e=1657152000&v=beta&t=yo3Cte2Pe7f55DTtGYEMco0CSv9N9Vo8WT_Wh9B_ZgA"
          alt="user image"
        />
      </div>
    </div>
    <div class="user-name">
      <span>
        Bektas <br />
        Albayrak
      </span>
    </div>
    <div class="nav-items">
      <div class="nav-item">
        <span class="material-symbols-outlined"> bookmark </span>
        <span>Templates</span>
      </div>
      <div class="nav-item">
        <span class="material-symbols-outlined"> category </span>
        <span>Categories</span>
      </div>
      <div class="nav-item">
        <span class="material-symbols-outlined"> pie_chart </span>
        <span>Analytic</span>
      </div>
    </div>
    <div class="menu-dash-graph-container">
      <div class="menu-dash-graph"></div>
    </div>
    <div class="nav-item logout-container">
      <span class="material-symbols-outlined"> logout </span>
      <span>Logout</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuMain",
};
</script>

<style lang="scss" scoped>
@import "/src/styles/menu-main.scss";
</style>
