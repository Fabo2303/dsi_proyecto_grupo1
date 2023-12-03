package com.grupo1.proyecto.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Reembolso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idReembolso;
    private Long ordenVenta;
    private String motivo;
    private Long cliente;
    private String fechaSolicitud;
}
