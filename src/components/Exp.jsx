import { useState } from 'react';

const fileSystem = [
    {
      name: '2023',
      type: 'folder',
      children: [
        {
          name: 'Enero',
          type: 'folder',
          children: [
            { 
                name: 'Leo Messi',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Andrés Escobar',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Mario Bros',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Yeison Jiménez',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Manuel Daza',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Robert Lewandowski',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Gianluigi Donnarumma',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Thiago Alcántara',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Joshua Kimmich',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Romelu Lukaku',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
            { 
                name: 'Antoine Griezmann',
                type: 'folder',
                children: [
                    { name: 'mesociclo.pdf', type: 'file' },
                    { name: 'stats.pdf', type: 'file' }
                ]
            },
          ],
        },
        {
          name: 'Abril',
          type: 'folder',
          children: [
            { name: 'Archivo3.txt', type: 'file' },
          ],
        },
      ],
    },
    {
      name: '2024',
      type: 'folder',
      children: [
        { name: 'Archivo4.txt', type: 'file' },
        { name: 'Archivo5.txt', type: 'file' },
      ],
    },
  ];
  
  // Componente que renderiza cada archivo o carpeta
  const FileNode = ({ node }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Si es un archivo, simplemente lo renderizamos
    if (node.type === 'file') {
      return <div className="ml-4 text-gray-600">📄 {node.name}</div>;
    }
  
    // Si es una carpeta, podemos expandirla o contraerla
    return (
      <div className="ml-4">
        <div
          className="cursor-pointer font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '📂' : '📁'} {node.name}
        </div>
  
        {/* Renderizar los hijos si la carpeta está abierta */}
        {isOpen && (
          <div className="ml-4">
            {node.children.map((child, index) => (
              <FileNode key={index} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  };

const Exp = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Sistema de Archivos</h1>
      {fileSystem.map((node, index) => (
        <FileNode key={index} node={node} />
      ))}
    </div>
  );
};

export default Exp;
