const express = require('express')
import { getEnemyDialogue } from './llm-integration';

const app = express();
const port = 3000;

app.get('/enemy-taunt', async (req, res) => {
    const taunt = await getEnemyDialogue();
    res.json({ taunt });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
