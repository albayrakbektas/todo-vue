<template>
  <div class="menu-container">
    <LeftArrowIcon />
    <UserAvatar />
    <UserName />
    <NavItems />
    <DashboardGraph />
    <LogOut />
  </div>
</template>

<script>
import LeftArrowIcon from "@/components/menu/LeftArrowIcon";
import UserAvatar from "@/components/menu/UserAvatar";
import UserName from "@/styles/menu/UserName";
import NavItems from "@/components/menu/NavItems";
import DashboardGraph from "@/components/menu/DashboardGraph";
import LogOut from "@/components/menu/LogOut";
export default {
  name: "MenuMain",
  components: {
    LogOut,
    DashboardGraph,
    NavItems,
    UserName,
    UserAvatar,
    LeftArrowIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/menu/menu-main.scss";
</style>
