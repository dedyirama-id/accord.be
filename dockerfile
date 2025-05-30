# Gunakan image dasar resmi Node.js LTS
FROM node:18-alpine

# Set direktori kerja di dalam container
WORKDIR /app

# Salin file proyek ke dalam container
COPY . .

# Install dependencies
RUN npm ci

# Test aplikasi
RUN npm run test

# Ekspose port aplikasi (ubah sesuai kebutuhan)
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "start"]