import React, { useState, useRef } from "react";
import {
  Upload,
  Music,
  Trash2,
  Play,
  Pause,
  Volume2,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export interface AudioFile {
  id: string;
  name: string;
  size: number;
  duration?: number;
  type: "greeting" | "hold_music" | "custom";
  file?: File;
}

interface AudioUploadSectionProps {
  audioFiles: AudioFile[];
  onChange: (files: AudioFile[]) => void;
}

interface PredefinedRecording {
  name: string;
  src: string;
  duration: string;
}

export const AudioUploadSection: React.FC<AudioUploadSectionProps> = ({
  audioFiles,
  onChange,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>(
    {}
  );
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [selectedRecordings, setSelectedRecordings] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  //   const audioTypes = [
  //     {
  //       id: "greeting",
  //       title: "Greeting Message",
  //       description: "Initial message when call connects",
  //       color: "bg-blue-100 text-blue-800",
  //       required: true,
  //     },
  //     {
  //       id: "hold_music",
  //       title: "Hold Music",
  //       description: "Background music during wait times",
  //       color: "bg-green-100 text-green-800",
  //       required: false,
  //     },
  //     {
  //       id: "custom",
  //       title: "Custom Audio",
  //       description: "Additional audio clips for specific scenarios",
  //       color: "bg-purple-100 text-purple-800",
  //       required: false,
  //     },
  //   ];

  const recordings: PredefinedRecording[] = [
    { name: "Other Bot 1", src: "/otherbot.wav", duration: "00:02/02:34" },
    { name: "Other Bot 2", src: "/otherbot.wav", duration: "00:02/02:34" },
    { name: "WiseTech Bot", src: "/WiseChirp.wav", duration: "00:02/02:34" },
  ];

  const handleFileUpload = (
    files: FileList | null,
    type: string = "custom"
  ) => {
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (file.type.startsWith("audio/")) {
        const newAudioFile: AudioFile = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          type: type as AudioFile["type"],
          file: file,
        };

        // Simulate upload progress
        setUploadProgress((prev) => ({ ...prev, [newAudioFile.id]: 0 }));

        const progressInterval = setInterval(() => {
          setUploadProgress((prev) => {
            const currentProgress = prev[newAudioFile.id] || 0;
            const newProgress = Math.min(currentProgress + 10, 100);

            if (newProgress >= 100) {
              clearInterval(progressInterval);
              setTimeout(() => {
                setUploadProgress((prev) => {
                  const updated = { ...prev };
                  delete updated[newAudioFile.id];
                  return updated;
                });
              }, 500);
            }

            return { ...prev, [newAudioFile.id]: newProgress };
          });
        }, 100);

        onChange([...audioFiles, newAudioFile]);
      }
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const removeAudioFile = (id: string) => {
    onChange(audioFiles.filter((file) => file.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const togglePlayAudio = (audioFile: AudioFile) => {
    if (!audioFile.file) return;

    if (playingAudio === audioFile.id) {
      audioRef.current?.pause();
      setPlayingAudio(null);
    } else {
      const url = URL.createObjectURL(audioFile.file);
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play();
        setPlayingAudio(audioFile.id);
      }
    }
  };

  const togglePlayRecording = (src: string, name: string) => {
    const recordingId = `recording-${name}`;

    if (playingAudio === recordingId) {
      audioRef.current?.pause();
      setPlayingAudio(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = src;
        audioRef.current.play();
        setPlayingAudio(recordingId);
      }
    }
  };

  const toggleRecordingSelection = (recordingName: string) => {
    setSelectedRecordings((prev) => {
      if (prev.includes(recordingName)) {
        return prev.filter((name) => name !== recordingName);
      } else {
        return [...prev, recordingName];
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Audio Types Overview */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {audioTypes.map((type) => (
          <Card
            key={type.id}
            className="border-1 border-border hover:shadow-md hover:shadow-primary/10  transition-all duration-300 ease-in-out hover:bg-muted/50 bg-sidebar"
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge className={type.color}>{type.title}</Badge>
                {type.required && (
                  <Badge variant="destructive" className="text-xs">
                    Required
                  </Badge>
                )}
              </div>
              <p className="text-xs ">{type.description}</p>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-5"
                onClick={() => {
                  fileInputRef.current?.click();
                  // Store the type for when files are selected
                  if (fileInputRef.current) {
                    fileInputRef.current.dataset.uploadType = type.id;
                  }
                }}
              >
                <Upload className="h-3 w-3 mr-1" />
                Upload {type.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div> */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Music className="h-5 w-5 text-purple-600" />
            <span>Predefined Audio Recordings</span>
          </CardTitle>
          <CardDescription>
            Select from our collection of pre-recorded audio clips for your bot
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recordings.map((recording, index) => (
              <div
                key={index}
                className={`
                  flex items-center space-x-3 p-4 rounded-lg border-1 transition-all text-sm font-medium truncate mb-4
                  ${
                    selectedRecordings.includes(recording.name)
                      ? "border-border bg-accent"
                      : "border-border"
                  }
                `}
                onClick={() => toggleRecordingSelection(recording.name)}
              >
                <div
                  className={`
                  w-6 h-6 rounded border-1 flex items-center justify-center transition-colors
                  ${
                    selectedRecordings.includes(recording.name)
                      ? "border-border bg-accent"
                      : null
                  }
                `}
                >
                  {selectedRecordings.includes(recording.name) && (
                    <Check className="h-4 w-4 " />
                  )}
                </div>

                <div className="bot-studio-gradient p-2 rounded">
                  <Volume2 className="h-4 w-4 " />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-mediumtruncate mb-2">
                    {recording.name}
                  </p>
                  <p className="text-xs">Duration: {recording.duration}</p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlayRecording(recording.src, recording.name);
                  }}
                  className="h-8 w-8 p-0"
                >
                  {playingAudio === `recording-${recording.name}` ? (
                    <Pause className="h-3 w-3" />
                  ) : (
                    <Play className="h-3 w-3" />
                  )}
                </Button>
              </div>
            ))}
          </div>

          {selectedRecordings.length > 0 && (
            <div className="mt-4 p-3 bg-accent rounded-lg">
              <p className="text-sm font-medium  mb-4">
                Selected Recordings ({selectedRecordings.length}):
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedRecordings.map((recordingName) => (
                  <Badge
                    key={recordingName}
                    className="bg-purple-100 text-purple-800"
                  >
                    {recordingName}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      {/* Main Upload Area */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Music className="h-5 w-5 text-purple-600" />
            <span>Custom Audio Management</span>
          </CardTitle>
          <CardDescription>
            Upload custom audio files to train your bot on voice of your choice.
            Supported formats: MP3, WAV, OGG
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Drag & Drop Area */}
          <div
            className={`
              border-1 border-dashed  rounded-lg p-8 text-center transition-colors
              ${
                dragOver
                  ? "border-border bg-accent dark:bg-accent"
                  : "border-gray-300 hover:border-gray-400 hover:bg-accent"
              }
            `}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="bot-studio-gradient p-3 rounded-full">
                <Upload className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-medium">
                  Drop audio files here or click to browse
                </p>
                <p className="text-sm  mt-1">
                  Supports MP3, WAV, OGG up to 10MB each
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="border-purple-30 hover:bg-purple-50 cursor-pointer"
              >
                <Upload className="h-4 w-4 mr-2" />
                Choose Files
              </Button>
            </div>
          </div>

          {/* File List */}
          {audioFiles.length > 0 && (
            <div className="mt-6 space-y-3">
              <Label className="text-sm font-medium ">
                Uploaded Files ({audioFiles.length})
              </Label>
              <div className="space-y-4">
                {audioFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center space-x-3 p-3 bg-accent rounded-lg"
                  >
                    <div className="bot-studio-gradient p-2 rounded">
                      <Volume2 className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate mb-4">
                        {file.name}
                      </p>
                      <div className="flex items-center space-x-2 text-xs ">
                        <span>{formatFileSize(file.size)}</span>
                        <Badge
                          className={
                            file.type === "greeting"
                              ? "bg-blue-100 text-blue-800"
                              : file.type === "hold_music"
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                          }
                        >
                          {file.type.replace("_", " ")}
                        </Badge>
                      </div>
                      {uploadProgress[file.id] !== undefined && (
                        <Progress
                          value={uploadProgress[file.id]}
                          className="mt-2 h-1"
                        />
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => togglePlayAudio(file)}
                        className="h-8 w-8 p-0"
                      >
                        {playingAudio === file.id ? (
                          <Pause className="h-3 w-3" />
                        ) : (
                          <Play className="h-3 w-3" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAudioFile(file.id)}
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="audio/*"
        className="hidden"
        onChange={(e) => {
          const uploadType = e.target.dataset.uploadType || "custom";
          handleFileUpload(e.target.files, uploadType);
          e.target.value = ""; // Reset input
        }}
      />

      {/* Hidden audio element for playback */}
      <audio
        ref={audioRef}
        onEnded={() => setPlayingAudio(null)}
        className="hidden"
      />
    </div>
  );
};
