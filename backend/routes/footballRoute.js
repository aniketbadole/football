import {
  addNewPlayer,
  getPlayers,
  getPlayerByID,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer);

  app
    .route("/player/:PlayerID")
    .get(getPlayerByID)
    .put(updatePlayer)
    .delete(deletePlayer);
};

export default routes;
