<template>
    <nav class="nav-bottom">
        <slot name="logotype" />
        <div class="button-container">
            <div class="button-icon">
                <svg
                    class="icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.30005 15.301V9.90103H8.10005H9.90005H11.7001V15.301H14.4001V8.02003L9.00006 2.62003L3.60005 8.02003V15.301H6.30005ZM9.00005 0.0820312L17.9191 9.00103H16.2001V17.101H9.90005V11.701H8.10005V17.101H1.80005V9.00103H0.0810547L9.00005 0.0820312Z"
                    />
                    <mask
                        id="mask0_767_3875"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="18"
                        height="18"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.30005 15.301V9.90103H8.10005H9.90005H11.7001V15.301H14.4001V8.02003L9.00006 2.62003L3.60005 8.02003V15.301H6.30005ZM9.00005 0.0820312L17.9191 9.00103H16.2001V17.101H9.90005V11.701H8.10005V17.101H1.80005V9.00103H0.0810547L9.00005 0.0820312Z"
                        />
                    </mask>
                    <g mask="url(#mask0_767_3875)"></g>
                </svg>
            </div>
            <div class="button-icon">
                <svg
                    class="icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.4 8.1V9.9H4.6V8.1H6.4ZM10 8.1V9.9H8.2V8.1H10ZM13.6 8.1V9.9H11.8V8.1H13.6ZM15.4 1.8C16.3941 1.8 17.2 2.60589 17.2 3.6V16.2C17.2 17.1941 16.3941 18 15.4 18H2.8C1.801 18 1 17.19 1 16.2V3.6C1 2.60589 1.80589 1.8 2.8 1.8H3.7V0H5.5V1.8H12.7V0H14.5V1.8H15.4ZM15.4 16.2V6.3H2.8V16.2H15.4ZM6.4 11.7V13.5H4.6V11.7H6.4ZM10 11.7V13.5H8.2V11.7H10ZM13.6 11.7V13.5H11.8V11.7H13.6Z"
                    />
                </svg>
            </div>
            <div class="button-icon">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 10H10V16H8V10H2V8H8V2H10V8H16V10Z"
                    />
                    <mask
                        id="mask0_767_3856"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="2"
                        width="14"
                        height="14"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 10H10V16H8V10H2V8H8V2H10V8H16V10Z"
                        />
                    </mask>
                    <g mask="url(#mask0_767_3856)"></g>
                </svg>
            </div>
            <div class="button-icon message">
                <svg
                    class="icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.8 2H16.2C17.1941 2 18 2.80589 18 3.8V14.6C18 15.5941 17.1941 16.4 16.2 16.4H1.8C0.801 16.4 0 15.59 0 14.6V3.8C0 2.801 0.801 2 1.8 2ZM9 8.3L16.2 3.8H1.8L9 8.3ZM1.8 14.6H16.2V5.933L9 10.424L1.8 5.933V14.6Z"
                    />
                    <mask
                        id="mask0_767_3844"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="2"
                        width="18"
                        height="15"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.8 2H16.2C17.1941 2 18 2.80589 18 3.8V14.6C18 15.5941 17.1941 16.4 16.2 16.4H1.8C0.801 16.4 0 15.59 0 14.6V3.8C0 2.801 0.801 2 1.8 2ZM9 8.3L16.2 3.8H1.8L9 8.3ZM1.8 14.6H16.2V5.933L9 10.424L1.8 5.933V14.6Z"
                        />
                    </mask>
                    <g mask="url(#mask0_767_3844)"></g>
                </svg>
            </div>
            <div class="button-icon">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 1C11.2091 1 13 2.79086 13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1ZM9 3C7.89543 3 7 3.89543 7 5C7 6.10457 7.89543 7 9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3ZM9 10C11.67 10 17 11.33 17 14V17H1V14C1 11.33 6.33 10 9 10ZM9 11.9C6.03 11.9 2.9 13.36 2.9 14V15.1H15.1V14C15.1 13.36 11.97 11.9 9 11.9Z"
                    />
                    <mask
                        id="mask0_767_3830"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="1"
                        y="1"
                        width="16"
                        height="16"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 1C11.2091 1 13 2.79086 13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1ZM9 3C7.89543 3 7 3.89543 7 5C7 6.10457 7.89543 7 9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3ZM9 10C11.67 10 17 11.33 17 14V17H1V14C1 11.33 6.33 10 9 10ZM9 11.9C6.03 11.9 2.9 13.36 2.9 14V15.1H15.1V14C15.1 13.36 11.97 11.9 9 11.9Z"
                        />
                    </mask>
                    <g mask="url(#mask0_767_3830)"></g>
                </svg>
            </div>
            <div class="button-icon setting">
                <slot name="setting" />
            </div>
        </div>

        <div class="logout-nav"><slot name="logout" /></div>
    </nav>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
@import './styles/BottomNav.scss';
</style>
