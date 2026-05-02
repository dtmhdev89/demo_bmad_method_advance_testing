"use client";

import { useState } from "react";
import { Plus, Trash2, Edit3, Save, X } from "lucide-react";

interface Definition {
  id: string;
  text: string;
  languageCode: string;
}

interface Example {
  id: string;
  text: string;
  languageCode: string;
}

interface Props {
  conceptId: string;
  initialDefinitions: Definition[];
  initialExamples: Example[];
  targetLanguages: string[];
}

export default function LanguageDetail({ conceptId, initialDefinitions, initialExamples, targetLanguages }: Props) {
  const [activeLang, setActiveLang] = useState(targetLanguages[0] || "ja");
  const [definitions, setDefinitions] = useState<Definition[]>(initialDefinitions);
  const [examples, setExamples] = useState<Example[]>(initialExamples);
  
  const [isAddingDef, setIsAddingDef] = useState(false);
  const [newDefText, setNewDefText] = useState("");
  
  const [isAddingEx, setIsAddingEx] = useState(false);
  const [newExText, setNewExText] = useState("");

  const filteredDefs = definitions.filter(d => d.languageCode === activeLang);
  const filteredExs = examples.filter(e => e.languageCode === activeLang);

  const handleAddDefinition = async () => {
    if (!newDefText.trim()) return;
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/concepts/${conceptId}/definitions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newDefText, language_code: activeLang }),
      });
      
      if (res.ok) {
        const created = await res.json();
        setDefinitions([...definitions, created]);
        setNewDefText("");
        setIsAddingDef(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddExample = async () => {
    if (!newExText.trim()) return;
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/concepts/${conceptId}/examples`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newExText, language_code: activeLang }),
      });
      
      if (res.ok) {
        const created = await res.json();
        setExamples([...examples, created]);
        setNewExText("");
        setIsAddingEx(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteDefinition = async (id: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/definitions/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setDefinitions(definitions.filter(d => d.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteExample = async (id: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/examples/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setExamples(examples.filter(e => e.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-8">
      {/* Language Tabs */}
      <div className="flex gap-2 mb-6 p-1 bg-white/5 rounded-xl border border-white/10 w-fit">
        {targetLanguages.map(lang => (
          <button
            key={lang}
            onClick={() => setActiveLang(lang)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeLang === lang 
                ? "bg-white text-black shadow-lg" 
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Definitions Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Định nghĩa ({activeLang.toUpperCase()})</h2>
            <button 
              onClick={() => setIsAddingDef(true)}
              data-testid="add-definition-button"
              className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white"
            >
              <Plus size={20} />
            </button>
          </div>

          <div className="space-y-3">
            {isAddingDef && (
              <div className="p-4 bg-zinc-900 border border-blue-500/30 rounded-xl animate-in fade-in slide-in-from-top-2">
                <textarea
                  autoFocus
                  data-testid="definition-input"
                  value={newDefText}
                  onChange={(e) => setNewDefText(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-zinc-600 resize-none"
                  placeholder="Nhập định nghĩa mới..."
                  rows={2}
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button onClick={() => setIsAddingDef(false)} className="px-3 py-1 text-sm text-zinc-500 hover:text-white">Hủy</button>
                  <button 
                    onClick={handleAddDefinition} 
                    data-testid="save-definition-button"
                    className="px-3 py-1 text-sm bg-blue-600 rounded-md hover:bg-blue-500 transition-colors"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            )}

            {filteredDefs.length === 0 && !isAddingDef && (
              <p className="text-zinc-500 text-sm italic">Chưa có định nghĩa nào cho ngôn ngữ này.</p>
            )}

            {filteredDefs.map(def => (
              <div key={def.id} className="group p-4 bg-zinc-900/50 border border-white/5 rounded-xl hover:border-white/20 transition-all">
                <div className="flex justify-between items-start gap-4">
                  <p className="text-zinc-200">{def.text}</p>
                  <button 
                    onClick={() => handleDeleteDefinition(def.id)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/10 text-zinc-500 hover:text-red-500 rounded-lg transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Examples Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Ví dụ ({activeLang.toUpperCase()})</h2>
            <button 
              onClick={() => setIsAddingEx(true)}
              data-testid="add-example-button"
              className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white"
            >
              <Plus size={20} />
            </button>
          </div>

          <div className="space-y-3">
            {isAddingEx && (
              <div className="p-4 bg-zinc-900 border border-emerald-500/30 rounded-xl animate-in fade-in slide-in-from-top-2">
                <textarea
                  autoFocus
                  data-testid="example-input"
                  value={newExText}
                  onChange={(e) => setNewExText(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-zinc-600 resize-none"
                  placeholder="Nhập ví dụ mới..."
                  rows={2}
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button onClick={() => setIsAddingEx(false)} className="px-3 py-1 text-sm text-zinc-500 hover:text-white">Hủy</button>
                  <button 
                    onClick={handleAddExample} 
                    data-testid="save-example-button"
                    className="px-3 py-1 text-sm bg-emerald-600 rounded-md hover:bg-emerald-500 transition-colors"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            )}

            {filteredExs.length === 0 && !isAddingEx && (
              <p className="text-zinc-500 text-sm italic">Chưa có ví dụ nào cho ngôn ngữ này.</p>
            )}

            {filteredExs.map(ex => (
              <div key={ex.id} className="group p-4 bg-zinc-900/50 border border-white/5 rounded-xl hover:border-white/20 transition-all border-l-emerald-500/30 border-l-2">
                <div className="flex justify-between items-start gap-4">
                  <p className="text-zinc-200 italic">"{ex.text}"</p>
                  <button 
                    onClick={() => handleDeleteExample(ex.id)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/10 text-zinc-500 hover:text-red-500 rounded-lg transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
