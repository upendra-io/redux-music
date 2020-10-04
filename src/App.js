import React, { useState } from "react";
import "./App.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function App() {
  const arr = ["upendra", "upi", "uped"];
  return (
    <div className="App">
      <motion.input
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        type="text"
        className="search-bar"
        placeholder="Search for songs"
        spellCheck="false"
      />
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          {arr.map((item) => (
            <Item key={item} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
}

function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content item={item} />}</AnimatePresence>
    </motion.li>
  );
}

function Content({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row">{item}</div>
      <div className="row" />
      <div className="row" />
    </motion.div>
  );
}

export default App;
