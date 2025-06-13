import { useState } from 'react';
import { Search, Send, MoreVertical } from 'lucide-react';
import Input from '@/shared/ui/atoms/Input/Input';
import { Button } from '@/shared/ui';
import { CHATS, STUDENTS } from './dummy';

export default function StudentChatApp() {
  const [selectedStudent, setSelectedStudent] = useState(STUDENTS[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = STUDENTS.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Enviando mensaje:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="mt-2 grid h-[calc(100vh-50px)] grid-cols-[30%_auto] bg-gray-50">
      <div className="flex flex-col border-r border-gray-200">
        {/* Header del sidebar */}
        <div className="border-b border-gray-200 p-4">
          <h1 className="mb-3 text-xl font-semibold text-gray-800">
            Mis Estudiantes
          </h1>
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <Input
              placeholder="Buscar estudiantes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Lista de estudiantes */}
        <div className="flex-1">
          <div className="p-2">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className={`mb-2 cursor-pointer transition-colors hover:bg-gray-50 ${
                  selectedStudent?.id === student.id
                    ? 'rounded-lg border-blue-200 bg-blue-50'
                    : ''
                }`}
                onClick={() => setSelectedStudent(student)}
              >
                <div className="p-3">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="bg-primary-lighter h-12 w-12 rounded-full"></div>
                      {student.online && (
                        <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-sm font-medium text-gray-900">
                          {student.name}
                        </p>
                        <span className="text-xs text-gray-500">
                          {student.timestamp}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <p className="truncate text-sm text-gray-600">
                          {student.lastMessage}
                        </p>
                        {student.unread > 0 && (
                          <div className="ml-2 flex h-5 w-5 items-center justify-center p-0 text-xs">
                            {student.unread}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="bg-primary-lighter h-10 w-10 rounded-full"></div>
                {selectedStudent?.online && (
                  <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {selectedStudent?.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {selectedStudent?.online ? 'En línea' : 'Desconectado'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="space-y-4">
            {CHATS.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isTeacher ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs rounded-lg px-4 py-2 lg:max-w-md ${
                    message.isTeacher
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <p
                    className={`mt-1 text-xs ${message.isTeacher ? 'text-blue-100' : 'text-gray-500'}`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[auto_max-content] gap-4 border-t border-gray-200 p-4">
          <Input
            placeholder="Escribe tu mensaje..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
