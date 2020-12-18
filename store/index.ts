export const actions = {
    async nuxtServerInit({}, ctx) {
        ctx.store.commit("user/updateLoggedStatus", !!ctx.req.headers.cookie);
    },
};
