const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100px" height="100px" viewBox="0 0 128 128" style={{margin: '0 auto', background: 'none', display: 'block', alignSelf: 'center'}}>
            <g>
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#9f0013"/>
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#e7c0c5" transform="rotate(45 64 64)"/>
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#e7c0c5" transform="rotate(90 64 64)"/>
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#e7c0c5" transform="rotate(135 64 64)"/>
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#e7c0c5" transform="rotate(180 64 64)"/>
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#e7c0c5" transform="rotate(225 64 64)"/>
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#e7c0c5" transform="rotate(270 64 64)"/>
                <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#e7c0c5" transform="rotate(315 64 64)"/>
                <animateTransform attributeName="transform" type="rotate" values="0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64" 
                calcMode="discrete" dur="1120ms" repeatCount="indefinite"></animateTransform>
            </g>
        </svg>
    )
}

export default Spinner;