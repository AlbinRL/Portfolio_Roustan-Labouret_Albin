const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public', {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.pdf')) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        }
    }
}));

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Schéma du projet
const projectSchema = new mongoose.Schema({
    title: String,
    category: String,
    categoryClass: String,
    description: String,
    shortDescription: String,
    technologies: [String],
    features: [String],
    skills: [String],
    demo: String,
    code: String,
    icon: String,
    iconColor: String
});

const Project = mongoose.model('Project', projectSchema);

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route API pour les projets
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
}); 