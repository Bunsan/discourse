import computed from "ember-addons/ember-computed-decorators";

export default Ember.Component.extend({
  classNames: ["invite-list-user"],

  @computed("user.role")
  roleName(role) {
    return this.roles.findBy("id", role).label;
  }
});
