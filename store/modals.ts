import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class Modals extends VuexModule {
    visibleModal: string = "";

    get GET_VISIBLE_MODAL(): string {
        return this.visibleModal;
    }

    @Action({ rawError: true })
    SHOW_MODAL({ modalName }: { modalName: string }): void {
        this.context.commit("SET_VISIBLE_MODAL", { modalName });
    }
    @Action({ rawError: true })
    HIDE_MODAL({ modalName }: { modalName: string }): void {
        if (modalName !== this.visibleModal) {
            return;
        }
        this.context.commit("SET_VISIBLE_MODAL", { modalName: null });
    }

    @Mutation
    SET_VISIBLE_MODAL({ modalName }) {
        this.visibleModal = modalName;
    }
}
