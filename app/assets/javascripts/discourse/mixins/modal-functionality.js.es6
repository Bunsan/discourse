import showModal from "discourse/lib/show-modal";

export default Ember.Mixin.create({
  flash(text, messageClass) {
    this.appEvents.trigger("modal-body:flash", { text, messageClass });
  },

  clearFlash() {
    this.appEvents.trigger("modal-body:clearFlash");
  },

  showModal(...args) {
    return showModal(...args);
  },

  actions: {
    closeModal() {
      this.modal.send("closeModal");
      this.set("panels", []);
    },

    onSelectPanel(panel) {
      this.set("selectedPanel", panel);
    }
  }
});
