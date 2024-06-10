require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const session = require("express-session");
const store = new session.MemoryStore();

const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.users.findById(id, (err, user) => {
    if (err) return done(err);
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(function (username, password, done) {
    db.users.findByUsername(username, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      if (user.password != password) return done(null, false);
      return done(null, user);
    });
  })
);

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/profile");
  });
});

app.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  res.render("profile", { user: req.user });
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/profile");
  }
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// USERS

let records = [
  {
    id: 1,
    username: "sam",
    password: "password!",
  },
];

const createUser = (user) => {
  return new Promise((resolve, reject) => {
    const newUser = {
      id: getNewId(records),
      ...user,
    };
    records = [newUser, ...records];
    resolve(newUser);
  });
};

const db = {
  users: {
    findById: (id, cb) => {
      const user = records.find((user) => user.id === id);
      if (user) {
        cb(null, user);
      } else {
        cb(new Error("User not found"));
      }
    },
    findByUsername: (username, cb) => {
      const user = records.find((user) => user.username === username);
      if (user) {
        cb(null, user);
      } else {
        cb(null, null);
      }
    },
  },
};
