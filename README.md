# 🍽️ Restaurant Menu API

## 📌 Proje Hakkında

Bu proje, restoran menüsü veya ürün kataloğu yönetimi için geliştirilmiş basit fakat güçlü bir **RESTful API**'dir. Node.js, Express.js ve Knex.js teknolojilerini kullanarak PostgreSQL veritabanı ile etkileşim kurar.

## 🚀 Özellikler

- Kategori ve ürünler (menü öğeleri) için **CRUD (Create, Read, Update, Delete)** işlemleri
- **Modüler yapı** ile kolay yönetim ve ölçeklenebilirlik
- Gelişmiş loglama ile istek takibi
- Knex.js ile SQL sorgularının kolay ve güvenli yazımı
- Ortam değişkenleri ile yapılandırılabilir sunucu

## 📁 Proje Yapısı

```
BE-1813P/
├── node_modules/
├── src/
│   ├── config/
│   │   ├── dbConfig.js          # Veritabanı bağlantı ayarları
│   │   ├── knexfile.js          # Knex yapılandırması
│   │   └── server.js            # Express uygulamasının başlangıç noktası
│   ├── controllers/             # İş mantığı (controller) dosyaları
│   ├── database/                # Knex migration/seeding dosyaları
│   ├── routes/                  # Route tanımlamaları
│   │   ├── categoriesRoutes.js
│   │   └── productsRoutes.js
├── .env                         # Ortam değişkenleri
├── package.json
├── package-lock.json
└── .gitignore
```

## ⚙️ Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. `.env` dosyasını oluşturun:
```
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

3. Veritabanını yapılandırmak için Knex migration çalıştırın:
```bash
npx knex migrate:latest
```

4. Uygulamayı başlatın:
```bash
node src/config/server.js
```

## 🧪 API Endpointleri

### 📦 Products

- `GET /api/products` → Tüm ürünleri getirir
- `GET /api/products/:id` → Belirli bir ürünü getirir
- `POST /api/products` → Yeni ürün ekler
- `PUT /api/products/:id` → Ürün günceller
- `DELETE /api/products/:id` → Ürün siler

### 🗂️ Categories

- `GET /api/categories` → Tüm kategorileri getirir
- `POST /api/categories` → Yeni kategori ekler
- `PUT /api/categories/:id` → Kategori günceller
- `DELETE /api/categories/:id` → Kategori siler

## 🧰 Kullanılan Teknolojiler

- Node.js
- Express.js
- Knex.js
- PostgreSQL
- dotenv

## 📌 Not

Bu proje, restoran veya ürün kataloğu gibi CRUD tabanlı uygulamaların temelini öğrenmek ve geliştirmek isteyenler için başlangıç seviyesinde bir örnektir..

---

📬 Geri bildirimleriniz ve katkılarınız için PR gönderebilirsiniz.
