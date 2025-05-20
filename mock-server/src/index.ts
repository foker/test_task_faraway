import cors from 'cors';
import express from 'express';
import { characters } from './data/characters';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// GET /api/people - Get all characters with pagination and search
app.get('/api/people', (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const search = req.query.search as string;
  const pageSize = 10;

  let filteredCharacters = [...characters];

  if (search) {
    const searchLower = search.toLowerCase();
    filteredCharacters = filteredCharacters.filter(char =>
      char.name.toLowerCase().includes(searchLower) ||
      char.birth_year.toLowerCase().includes(searchLower) ||
      char.gender.toLowerCase().includes(searchLower)
    );
  }

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedCharacters = filteredCharacters.slice(startIndex, endIndex);

  res.json({
    count: characters.length,
    next: endIndex < characters.length ? `page=${page + 1}` : null,
    previous: page > 1 ? `page=${page - 1}` : null,
    results: paginatedCharacters
  });
});

// GET /api/people/:id - Get character by ID
app.get('/api/people/:id', (req, res) => {
  const id = req.params.id;
  const character = characters.find(char => char.url.includes(`/people/${id}/`));

  if (!character) {
    return res.status(404).json({ detail: 'Not found' });
  }

  res.json(character);
});

app.listen(port, () => {
  console.log(`Mock SWAPI server running at http://localhost:${port}`);
}); 