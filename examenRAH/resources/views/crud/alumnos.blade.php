@extends('layout')
@section('contenido')
    <a href="{{ route('alumnos.create') }}">Crear un alumno nuevo</a>
    <tabla filas_serializado="{{ $alumnos }}" columnas_serializado="{{ $campos }}" nombre="{{ $nombre }}" />
@endsection
