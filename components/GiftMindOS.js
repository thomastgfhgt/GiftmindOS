import { useState, useRef, useCallback } from "react";
export default function GiftMindOS() {
  const [screen, setScreen] = useState("intro");
  const [curFree, setCurFree] = useState(0);
  const [freeVals, setFreeVals] = useState({ budget: "", age: "", city: "", hobby: "" });
  const [freeErr, setFreeErr] = useState("");
  const [curBin, setCurBin] = useState(0);
  const [inDynamic, setInDynamic] = useState(false);
  const [fixedAnswers, setFixedAnswers] = useState([]);
  const [dynQuestions, setDynQuestions] = useState([]);
  const [excludedThemes, setExcludedThemes] = useState(new Set());
  const [conf, setConf] = useState(0);
  const [confPhase, setConfPhase] = useState("Initialisation…");
  const [thinking, setThinking] = useState(false);
  const [recos, setRecos] = useState([]);
  const [sortedRecos, setSortedRecos] = useState([]);
  const [sortMode, setSortMode] = useState("match");
  const [chatHistory, setChatHistory] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  return <div style={{background:"#0A0A0A",color:"#F0F0F0",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"monospace"}}><h1>GiftMind OS — chargement…</h1></div>;
}
