<template>
  <main class="main-for-message">
    <div class="block">
      <navigation-in-chat v-model="searchValue" />
      <section class="background">
        <navigation-group>
          <h1 class="title-inbox">Inbox</h1>
        </navigation-group>
        <template v-for="(user, index) in search">
          <router-link  class="link" :key="index" :to="{name: 'chat', params: {'name':user.name}}">
            <direct-messages
              :img="user.avatar"
              :name="user.name"
              :message="user.message">
              <template v-slot:amount>
                <div class="amount">1</div>
              </template>
            </direct-messages>
          </router-link>
        </template>
      </section>
    </div>
    <div class="block-chat">
      <chat-in-desktop />
    </div>
    <bottom-nav>
      <template v-slot:logotype>
        <img
          class="nav-logotype"
          src="../components/Bottom-nav/icons/Logo.svg"
          alt="logotype"
        />
      </template>
      <template v-slot:setting>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0001 7.2C14.651 7.2 16.8001 9.34903 16.8001 12C16.8001 14.651 14.651 16.8 12.0001 16.8C9.34909 16.8 7.20006 14.651 7.20006 12C7.20006 9.34903 9.34909 7.2 12.0001 7.2ZM12 9.6C10.6745 9.6 9.59999 10.6745 9.59999 12C9.59999 13.3255 10.6745 14.4 12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.6 12 9.6ZM9.60003 24C9.30003 24 9.04803 23.784 9.00003 23.496L8.55603 20.316C7.80003 20.016 7.15203 19.608 6.52803 19.128L3.54003 20.34C3.27603 20.436 2.95203 20.34 2.80803 20.076L0.408027 15.924C0.252027 15.66 0.324027 15.336 0.552027 15.156L3.08403 13.164L3.00003 12L3.08403 10.8L0.552027 8.844C0.324027 8.664 0.252027 8.34 0.408027 8.076L2.80803 3.924C2.95203 3.66 3.27603 3.552 3.54003 3.66L6.52803 4.86C7.15203 4.392 7.80003 3.984 8.55603 3.684L9.00003 0.504C9.04803 0.216 9.30003 0 9.60003 0H14.4C14.7 0 14.952 0.216 15 0.504L15.444 3.684C16.2 3.984 16.848 4.392 17.472 4.86L20.46 3.66C20.724 3.552 21.048 3.66 21.192 3.924L23.592 8.076C23.748 8.34 23.676 8.664 23.448 8.844L20.916 10.8L21 12L20.916 13.2L23.448 15.156C23.676 15.336 23.748 15.66 23.592 15.924L21.192 20.076C21.048 20.34 20.724 20.448 20.46 20.34L17.472 19.14C16.848 19.608 16.2 20.016 15.444 20.316L15 23.496C14.952 23.784 14.7 24 14.4 24H9.60003ZM11.1 2.4L10.656 5.532C9.21605 5.832 7.94405 6.6 7.02005 7.668L4.12805 6.42L3.22805 7.98L5.76005 9.84C5.28005 11.244 5.28005 12.768 5.76005 14.16L3.21605 16.032L4.11605 17.592L7.03205 16.344C7.95605 17.4 9.21605 18.168 10.644 18.456L11.088 21.6H12.912L13.356 18.468C14.784 18.168 16.044 17.4 16.968 16.344L19.884 17.592L20.784 16.032L18.24 14.172C18.72 12.768 18.72 11.244 18.24 9.84L20.772 7.98L19.872 6.42L16.98 7.668C16.056 6.6 14.784 5.832 13.344 5.544L12.9 2.4H11.1Z"
          />
          <mask
            id="mask0_784_5923"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 7.2C14.651 7.2 16.8001 9.34903 16.8001 12C16.8001 14.651 14.651 16.8 12.0001 16.8C9.34909 16.8 7.20006 14.651 7.20006 12C7.20006 9.34903 9.34909 7.2 12.0001 7.2ZM12 9.6C10.6745 9.6 9.59999 10.6745 9.59999 12C9.59999 13.3255 10.6745 14.4 12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.6 12 9.6ZM9.60003 24C9.30003 24 9.04803 23.784 9.00003 23.496L8.55603 20.316C7.80003 20.016 7.15203 19.608 6.52803 19.128L3.54003 20.34C3.27603 20.436 2.95203 20.34 2.80803 20.076L0.408027 15.924C0.252027 15.66 0.324027 15.336 0.552027 15.156L3.08403 13.164L3.00003 12L3.08403 10.8L0.552027 8.844C0.324027 8.664 0.252027 8.34 0.408027 8.076L2.80803 3.924C2.95203 3.66 3.27603 3.552 3.54003 3.66L6.52803 4.86C7.15203 4.392 7.80003 3.984 8.55603 3.684L9.00003 0.504C9.04803 0.216 9.30003 0 9.60003 0H14.4C14.7 0 14.952 0.216 15 0.504L15.444 3.684C16.2 3.984 16.848 4.392 17.472 4.86L20.46 3.66C20.724 3.552 21.048 3.66 21.192 3.924L23.592 8.076C23.748 8.34 23.676 8.664 23.448 8.844L20.916 10.8L21 12L20.916 13.2L23.448 15.156C23.676 15.336 23.748 15.66 23.592 15.924L21.192 20.076C21.048 20.34 20.724 20.448 20.46 20.34L17.472 19.14C16.848 19.608 16.2 20.016 15.444 20.316L15 23.496C14.952 23.784 14.7 24 14.4 24H9.60003ZM11.1 2.4L10.656 5.532C9.21605 5.832 7.94405 6.6 7.02005 7.668L4.12805 6.42L3.22805 7.98L5.76005 9.84C5.28005 11.244 5.28005 12.768 5.76005 14.16L3.21605 16.032L4.11605 17.592L7.03205 16.344C7.95605 17.4 9.21605 18.168 10.644 18.456L11.088 21.6H12.912L13.356 18.468C14.784 18.168 16.044 17.4 16.968 16.344L19.884 17.592L20.784 16.032L18.24 14.172C18.72 12.768 18.72 11.244 18.24 9.84L20.772 7.98L19.872 6.42L16.98 7.668C16.056 6.6 14.784 5.832 13.344 5.544L12.9 2.4H11.1Z"
            />
          </mask>
          <g mask="url(#mask0_784_5923)"></g>
        </svg>
      </template>
      <template v-slot:logout>
        <svg
          class="icon"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.08 27.59L28.67 25H19V23H28.67L26.08 20.41L27.5 19L32.5 24L27.5 29L26.08 27.59ZM31 15C32.1046 15 33 15.8954 33 17V21.67L31 19.67V17H17V31H31V28.33L33 26.33V31C33 32.1046 32.1046 33 31 33H17C15.89 33 15 32.1 15 31V17C15 15.89 15.89 15 17 15H31Z"
          />
          <mask
            id="mask0_784_5867"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="15"
            y="15"
            width="18"
            height="18"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.08 27.59L28.67 25H19V23H28.67L26.08 20.41L27.5 19L32.5 24L27.5 29L26.08 27.59ZM31 15C32.1046 15 33 15.8954 33 17V21.67L31 19.67V17H17V31H31V28.33L33 26.33V31C33 32.1046 32.1046 33 31 33H17C15.89 33 15 32.1 15 31V17C15 15.89 15.89 15 17 15H31Z"
            />
          </mask>
          <g mask="url(#mask0_784_5867)"></g>
        </svg>
      </template>
    </bottom-nav>
  </main>
</template>

<script>
import NavigationInChat from '../components/Navigation-in-chat/NavigationInChat.vue';
import NavigationGroup from '@/components/NavigationGroup/NavigationGroup.vue';
import DirectMessages from '@/components/Direct-Messages/DirectMessages.vue';
import BottomNav from '@/components/Bottom-nav/BottomNav.vue';
import ChatInDesktop from '@/components/Chat/ChatInDesktop.vue';
import { db } from '../firebase/index';
import { collection, getDocs } from 'firebase/firestore';

export default {
  components: {
    NavigationInChat,
    NavigationGroup,
    DirectMessages,
    BottomNav,
    ChatInDesktop,
  },
  data() {
    return {
      searchValue: '',
      arr: [],
    };
  },

  computed: {
    search() {
      return this.arr.filter((name) => {
        return name.name.toUpperCase().includes(this.searchValue);
      });
    },
  },
  async created() {
    const res = await getDocs(collection(db, 'users'));
    res.forEach((doc) => {
      const user = {
        id: doc.id,
        name: doc.data().name,
        avatar: doc.data().photo,
        message: doc.data().messages,
      };
      return this.arr.push(user);
    });
  },
};
</script>

<style>
@import '../assets/style/styles.scss';
</style>
