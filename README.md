# Music Studio Pro — DAW + Harmony Engine + Stem Mixing

Professional music creation platform: arrangement, harmony analysis, stem mixing Notemap v2, sample catalog, collaboration, mastering.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite + Tone.js (mock), Chart.js
- **15 Apps:** daw, harmony, mixing, stems, notation, audio_engine, catalog, collab, analytics, mastering, effects, instruments, tempo, library, export

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t music-studio-pro .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **DAW** tracks/clips/arrangement timeline with automation
- **Harmony** extracts chords/roman numerals, cadence (authentic/plagal), modal interchange, secondary dominant
- **Mixing** stem gain ≤0 dBFS, pan, Notemap v2 TOML, rehearsal metadata DB
- **Stems** separation vocal/drums/bass/other, gain staging
- **Notation** MIDI/MusicXML, transposition, Notemap v2
- **Mastering** -14 LUFS, export wav/mp3

## License
Proprietary — All rights reserved (Harmony Labs).
