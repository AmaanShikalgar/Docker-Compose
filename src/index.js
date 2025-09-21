import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.json({
        "message": "Gdt endpoint"
    });
});
app.post("/", (req, res) => {
    res.json({
        "message": "post endpoint"
    });
});
console.log("Server running on port 3000");
app.listen(3000);
//# sourceMappingURL=index.js.map