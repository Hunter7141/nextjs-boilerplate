<!doctype html>
font-weight:800;
letter-spacing:-0.02em;
margin:0 0 6px 0;
}
.subtitle{
color:var(--muted);
margin:0;
font-weight:300;
}
.hub{
display:grid;
grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));
gap:20px;
margin-top:28px;
}
.btn{
display:inline-flex;
align-items:center;
justify-content:center;
gap:12px;
padding:18px 22px;
border-radius:14px;
text-decoration:none;
background:linear-gradient(135deg,var(--accent1),var(--accent2));
color:white;
font-weight:600;
font-size:18px;
box-shadow:0 6px 20px rgba(0,0,0,0.6), inset 0 -2px 8px rgba(255,255,255,0.02);
transition:transform .18s ease, box-shadow .18s ease, filter .18s ease;
-webkit-tap-highlight-color: transparent;
border:0;
}
.btn:focus{outline:3px solid rgba(124,92,255,0.18); outline-offset:3px}
.btn:hover{transform:translateY(-6px) scale(1.01); box-shadow:0 12px 30px rgba(0,0,0,0.7)}
.btn.secondary{background:linear-gradient(135deg,#222,#323232); color:var(--muted); border:1px solid rgba(255,255,255,0.04)}


.note{color:var(--muted); font-size:13px; margin-top:16px}


/* small screens */
@media (max-width:420px){
.btn{padding:14px 16px; font-size:16px}
}
</style>
</head>
<body>
<div class="container">
<header>
<h1 class="title">Baddies</h1>
<p class="subtitle">A simple hub linking to my other sites</p>
</header>


<main>
<div class="hub">
<!-- Replace href values with your real links -->
<a class="btn" id="btn-1" href="#" target="_blank" rel="noopener noreferrer" aria-label="Open site one">Site One</a>
<a class="btn" id="btn-2" href="#" target="_blank" rel="noopener noreferrer" aria-label="Open site two">Site Two</a>
<a class="btn" id="btn-3" href="#" target="_blank" rel="noopener noreferrer" aria-label="Open site three">Site Three</a>
</div>


<p class="note">Tip: edit the <code>href</code> attributes to point to your sites. Buttons open in a new tab.</p>
</main>
</div>


<script>
// OPTIONAL: quick way to set links dynamically (useful if you later want to change from JS)
// Example usage:
// document.getElementById('btn-1').href = 'https://example.com'


// Small safety: make sure placeholders don't navigate away (they are set to '#')
document.querySelectorAll('.btn').forEach(btn => {
btn.addEventListener('click', (e) => {
if (btn.getAttribute('href') === '#') {
e.preventDefault();
alert('This button has no link yet. Edit the href in the HTML to add a destination.');
}
})
})
</script>
</body>
</html>
