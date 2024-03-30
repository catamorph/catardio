import React from "react";

const LinksList = () => {
  const links = [
    {
      url: "https://dexscreener.com/solana/BKSEprUymTR1TNn3BiSBiM61bdrGj9zfk5qWpmYNNhPr",
      text: "Chart",
    },
    {
      url: "https://solscan.io/token/BKSEprUymTR1TNn3BiSBiM61bdrGj9zfk5qWpmYNNhPr",
      text: "Token",
    },
    { url: "https://t.co/4HZcS28CKj", text: "Telegram" },
    { url: "https://twitter.com/CatardioSolana", text: "X" },
  ];

  return (
    <ul className="links-list">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksList;
