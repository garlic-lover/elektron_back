export default {
  Query: {
    tricks: async (parent, { machine, theme }, { models }) => {
      let theTricks = await models.Trick.find({ machine: machine });
      return theTricks;
    },
    trick: async (parent, { trickId, trickName }, { models }) => {
      let theTrick;
      if (trickName) {
        let theTricks = await models.Trick.find({ name: trickName });
        if (theTricks.length > 0) {
          theTrick = theTricks[0];
        }
      } else if (trickId) {
        theTrick = await models.Trick.findById(trickId);
      }
      if (theTrick) {
        return theTrick;
      } else return null;
    },
  },
  Mutation: {
    trickCreate: async (parent, { trick }, { models }) => {
      try {
        await new models.Trick(trick).save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
