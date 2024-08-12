import * as dao from "./dao.js";
export default function ModuleRoutes(app) {

    app.put("/api/modules/:mid", async (req, res) => {
      const { mid } = req.params;
      const module = req.body;
      const status = await dao.updateModule(mid, module);
      res.send(status);
      });
    

    app.delete("/api/modules/:mid", async (req, res) => {
      const { mid } = req.params;
      const status = await dao.deleteModule(mid);
      res.json(status);
      });
    
    app.post("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const module = await dao.createModule(cid, req.body);
        res.json(module);
      });
    
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesByCid(cid);
        res.send(modules);
  });
}
