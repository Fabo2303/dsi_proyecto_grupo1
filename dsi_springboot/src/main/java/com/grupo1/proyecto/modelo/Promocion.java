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
public class Promocion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPromocion;
    private String descripcion;
    private String fechaInicio;
    private String fechaFin;
    private boolean estado;
    private float descuento;
}
