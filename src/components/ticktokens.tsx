"use client"
import { useState } from "react";
import claude from './claude.json'
import { Tiktoken, TiktokenBPE } from 'js-tiktoken'

export default function Tiktokens() {
  const [input, setInput] = useState("hello hello 　world 私わ日本人です。");

  const getTokenizer = (): Tiktoken => {
    const ranks: TiktokenBPE = {
      bpe_ranks: claude.bpe_ranks,
      special_tokens: claude.special_tokens,
      pat_str: claude.pat_str,
    }
    return new Tiktoken(ranks)
  }

  const tokenizer = getTokenizer()
  const encoded = tokenizer.encode(input.normalize('NFKC'), 'all')
  
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {encoded.length}
    </div>
  );
}