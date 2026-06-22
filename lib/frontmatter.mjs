// Minimal YAML-frontmatter parser — supports the small subset we need:
//   key: value            (string / number / true / false)
//   key: "quoted value"
//   key: [a, "b c", d]    (inline array)
//   key:                  (followed by "- item" lines = block array)
// No external dependencies.

export function parseFrontmatter(raw) {
  const text = String(raw).replace(/^﻿/, '').replace(/\r\n?/g, '\n');
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(text);
  if (!m) return { data: {}, body: text };
  return { data: parseBlock(m[1]), body: m[2] };
}

function parseBlock(src) {
  const data = {};
  const lines = src.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || /^\s*#/.test(line)) {
      i++;
      continue;
    }
    const kv = /^([A-Za-z0-9_]+):\s*(.*)$/.exec(line);
    if (!kv) {
      i++;
      continue;
    }
    const key = kv[1];
    const rest = kv[2];

    if (rest === '') {
      // Maybe a block array on following "- item" lines.
      const arr = [];
      let j = i + 1;
      while (j < lines.length && /^\s*-\s+/.test(lines[j])) {
        arr.push(parseScalar(lines[j].replace(/^\s*-\s+/, '').trim()));
        j++;
      }
      data[key] = arr.length ? arr : '';
      i = arr.length ? j : i + 1;
      continue;
    }

    data[key] = parseScalar(rest);
    i++;
  }
  return data;
}

function parseScalar(value) {
  let v = String(value).trim();
  if (/^\[.*\]$/.test(v)) {
    const inner = v.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(',').map((x) => stripQuotes(x.trim()));
  }
  if (v === 'true') return true;
  if (v === 'false') return false;
  return stripQuotes(v);
}

function stripQuotes(v) {
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    return v.slice(1, -1);
  }
  return v;
}
