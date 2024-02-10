"use strict";

let act1 = {
  id: 1,
  fullName: "Ryan Reynolds",
  age: 47,
  address: "Canada",
};

let act2 = {
  id: 2,
  fullName: "Rocky Balboa",
  age: 27,
  address: "America",
};

let act3 = {
  id: 3,
  fullName: "Christoph Waltz",
  age: 67,
  address: "Austria",
};

let group = {
  name: "Hollywood",
  capacity: 3,
  actors: [],
  addActor: function (act) {
    if (act == undefined) {
      alert("Input can't be empty");
      return;
    }
    if (this.actors.length >= this.capacity) {
      alert("Group already filled");
      return;
    }
    this.actors.push(act);
  },
  getAllActors: function () {
    return this.actors;
  },
  getActorById: function (id) {
    let findActor = this.actors.find((actor) => actor.id === id);
    if (findActor) {
      return findActor;
    } else {
      return("Actor with" + " " + id + " " + "Id" + " " + "Was Not Found");
    }
  },
  updateActor: function (id, updated) {
    let i = this.actors.findIndex((actor) => actor.id == id);
    if (i > 0) {
      let current = this.actors[i];
      this.actors[i] = updated;
    } else {
      return "Actor was not found";
    }
    for (let i = 0; i < updated.length; i++) {
      if (updated[i] == current[i]) {
        this.actors[i] = { current, updated };
      }
    }
  },
  searchActor: function (act) {
    return this.actors.filter((actor) =>
      actor.fullName.toLowerCase().includes(act.toLowerCase())
    )
  },
  deleteActor: function (id) {
    let i = this.actors.findIndex(actor => actor.id == id);
    if (i >= 0) {
        this.actors.splice(i, 1);
    } else {
        console.log("Was not found");
    }
}

};
group.addActor(act1);
group.addActor(act2);
group.addActor(act3);
console.log(group.getAllActors());
group.updateActor(2, {
  id: 2,
  fullName: "Sylvester Stallone",
  age: 75,
  address: "America",
});
console.log(group.searchActor("S"));
group.deleteActor(1);