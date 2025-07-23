<div align="center">

<h1>👨‍🌾🌽 Bulgarska Koshnica — Farmers Market Finder</h1>

<p>A <b>React Native / Expo</b> application that helps Bulgarians discover nearby farmers’ markets, artisan producers and organic stores.</p>

<div>
  <img src="https://img.shields.io/badge/Team%20-%20Project%20-%20gray?logo=codecrafters&labelColor=orange" style="height: 30px; width: auto;">
  <img src="https://img.shields.io/badge/In%20Development%20-%20%230f5bf3?logo=googlecloudspanner&logoColor=white" style="height: 30px; width: auto;">
</div>

</div>

---

## 🏷️ Features

- **Interactive Map** – Browse an in-app map and instantly see verified farm shops, market stalls and delivery points around you.

- **Powerful Search & Filters** – Find vendors by product category, keywords or location.

- **Location Profiles** – Each vendor page exposes opening hours, contacts, delivery options and a live product catalogue.

- **Ratings & Reviews** – Authenticated users can post comments, give ratings and report inaccurate information or vendor problems.

- **Vendor Dashboard** – Producers can create their own location, upload photos and keep product prices up-to-date straight from their phones.

- **Offline-First Assets** – Images and basic metadata are cached on device so browsing feels snappy even on a low bandwidth internet connection.

---

## 🛠 Tech Stack

| Layer                | Technology                                                   |
|----------------------|--------------------------------------------------------------|
| **Mobile App**       | React Native (Expo SDK 50), TypeScript, [Jotai State](https://jotai.org/) |
| **Maps & Geo**       | [`react-native-maps`](https://www.npmjs.com/package/react-native-maps), Expo Location API |
| **Backend API**      | Node.js 18, Express 5, [express-validator](https://express-validator.github.io/docs/) |
| **Auth & Security**  | JSON Web Tokens (JWT) |
| **Database**         | MySQL 8 |
| **Front-End & Design Libs/Tools**  | [FlashList](https://www.npmjs.com/package/@shopify/flash-list), [Lottie](https://lottiefiles.com/) |
| **DevOps**           | Expo Go for live reload |

---

## 🚀 Getting Started

### Prerequisites
* **Node ≥ 18**  
* **Expo CLI** (`npm i -g expo-cli`)  
* **MySQL** running locally or reachable in the cloud

### Clone
```bash
git clone https://github.com/vasilev17/bulgarska-koshnica.git
cd bulgarska-koshnica
```

###  Backend Setup
```bash
cd backend
nano .env   # edit DB creds & JWT secrets
npm install
npm start   # default port 3000
```

### Database Setup
```bash
mysql -u root -p < database/schema.sql
mysql -u root -p bulgarska_koshnica < database/seed.sql   # optional
```

### Front-End Setup
```bash
cd ../frontend
npm install
npx expo start   # press “a” for Android, “i” for iOS, “w” for Web
```

---

## 🎬 Showcase

### Backend API Endpoints
<img width="1294" height="807" alt="Backend API Postman" src="https://github.com/user-attachments/assets/02bebe9c-9f2f-4500-9e11-2ef082ec0721" />

### Main Screen
https://github.com/user-attachments/assets/d53d58e0-90e4-4772-99ee-ecd4a629b49b


### User Screens
<img width="250" height="auto" alt="SignUp" src="https://github.com/user-attachments/assets/eb89d742-d829-41c1-9c82-02c9a158e94b" />
<img width="250" height="auto" alt="Login" src="https://github.com/user-attachments/assets/e4d02c36-3b7b-4c3e-8400-ba11543d3ab7" />
<img width="250" height="auto" alt="UserTypeSelect" src="https://github.com/user-attachments/assets/f627a13a-0d98-400d-8e9f-df64ea3bb312" />
<img width="250" height="auto" alt="UserInfo" src="https://github.com/user-attachments/assets/58b23131-1c8b-434c-bd0f-bb602681a352" />
<img width="250" height="auto" alt="VerificationCode" src="https://github.com/user-attachments/assets/c05c9901-221c-4e00-b491-5771eaae512f" />

### Business Screens
<img width="250" height="auto" alt="BusinessInfo" src="https://github.com/user-attachments/assets/e6dbc4e1-6da0-4c01-8287-c89f846caefc" />
<img width="250" height="auto" alt="ChooseLocation" src="https://github.com/user-attachments/assets/4197cec2-291e-4fd5-9374-d76703d09176" />
<img width="250" height="auto" alt="BusinessCategory" src="https://github.com/user-attachments/assets/f6ae2aad-bfec-4c60-8de0-1a33102c20a8" />
<img width="250" height="auto" alt="BusinessHours" src="https://github.com/user-attachments/assets/f786b04c-adf5-46b5-aa52-c7a98f9069e5" />
<img width="250" height="auto" alt="BusinessImage" src="https://github.com/user-attachments/assets/b786f98f-3ded-4e3e-8a39-731b8d85b8a7" />
<img width="250" height="auto" alt="BusinessProducts" src="https://github.com/user-attachments/assets/a63f4ce2-ddfa-431e-8ff5-f2e7029fbba8" />
<img width="250" height="auto" alt="NewProduct" src="https://github.com/user-attachments/assets/21407df5-50f3-4ffb-beb5-6521cf2a0e6b" />
<img width="250" height="auto" alt="BusinessKeyWords" src="https://github.com/user-attachments/assets/bd0cc98d-ec1c-4c8b-a263-8f340006ac03" />
<img width="250" height="auto" alt="Business Creation Success" src="https://github.com/user-attachments/assets/d3b1cf33-8428-4f4e-9c88-2ea689365219" />

### For detailed API endpoint information flow and UI design - download and view:
<a href="misc/Design%20(Full).fig" target="_blank">
    <img src="https://img.shields.io/badge/Design%20-%20%231abdff?logo=figma&logoColor=%23a358ff" style="height: 35px; width: auto;">
</a>

